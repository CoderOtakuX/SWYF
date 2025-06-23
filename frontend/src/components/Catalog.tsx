// File updated: April 5, 2025
// Fixed image loading issues with better error handling

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";
import { Loader2, Plus, Upload, RefreshCw, Shirt, Scissors } from "lucide-react";

interface CatalogItem {
  id: string;
  name: string;
  image: string;
  type: string;
}

interface CatalogData {
  shirts: CatalogItem[];
  pants: CatalogItem[];
}

const Catalog = () => {
  const [catalogData, setCatalogData] = useState<CatalogData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadName, setUploadName] = useState("");
  const [uploadType, setUploadType] = useState("shirt");
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchCatalog();
  }, []);

  const fetchCatalog = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/catalog');
      const data = await response.json();
      setCatalogData(data);
    } catch (error) {
      console.error("Error fetching catalog:", error);
      toast({
        title: "Error",
        description: "Failed to load the catalog. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setUploadFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Set default name from filename
      const fileName = file.name.split('.')[0];
      setUploadName(fileName);
    }
  };

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!uploadFile) {
      toast({
        title: "Missing file",
        description: "Please select an image to upload",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsUploading(true);
      
      const formData = new FormData();
      formData.append('file', uploadFile);
      formData.append('type', uploadType);
      formData.append('name', uploadName || `Custom ${uploadType.charAt(0).toUpperCase() + uploadType.slice(1)}`);
      
      const response = await fetch('/api/catalog/upload', {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Add new item to local catalog data
        if (catalogData) {
          const updatedCatalog = { ...catalogData };
          if (uploadType === 'shirt') {
            updatedCatalog.shirts.push(result.item);
          } else if (uploadType === 'pant') {
            updatedCatalog.pants.push(result.item);
          }
          setCatalogData(updatedCatalog);
        }
        
        toast({
          title: "Upload successful",
          description: result.message,
        });
        
        // Reset form
        setUploadFile(null);
        setUploadPreview(null);
        setUploadName("");
        setIsDialogOpen(false);
      } else {
        throw new Error(result.error || "Failed to upload item");
      }
    } catch (error) {
      console.error("Error uploading item:", error);
      toast({
        title: "Upload failed",
        description: error instanceof Error ? error.message : "Failed to upload the item. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const renderCatalogItems = (items: CatalogItem[], type: string) => {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <Card key={item.id} className="relative overflow-hidden group border shadow-sm hover:shadow-md transition-all">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 z-10">
              <Button variant="secondary" className="mx-1">
                Try On
              </Button>
            </div>
            <div className="aspect-square bg-gray-100 relative">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  console.error(`Failed to load image: ${item.image}`);
                  // Fallback to a placeholder image
                  e.currentTarget.src = "/placeholder-image.png";
                  // Try with absolute URL if relative URL fails
                  if (item.image.startsWith('/')) {
                    const absoluteUrl = `${window.location.origin}${item.image}`;
                    console.log(`Retrying with absolute URL: ${absoluteUrl}`);
                    e.currentTarget.src = absoluteUrl;
                  }
                }}
              />
              {item.type === 'user' && (
                <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                  Custom
                </span>
              )}
            </div>
            <CardFooter className="p-2 border-t bg-white">
              <p className="text-sm font-medium truncate w-full text-center">{item.name}</p>
            </CardFooter>
          </Card>
        ))}
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Card className="aspect-square flex flex-col items-center justify-center cursor-pointer border-dashed border-2 hover:border-primary/50 transition-colors">
              <Plus className="h-8 w-8 mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Add {type}</p>
            </Card>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload New Item</DialogTitle>
              <DialogDescription>
                Upload a new clothing item to your catalog. The background will be automatically removed.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleUpload}>
              <div className="space-y-4 py-2">
                <div className="space-y-2">
                  <Label htmlFor="upload-type">Item Type</Label>
                  <RadioGroup
                    value={uploadType}
                    onValueChange={setUploadType}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="shirt" id="option-shirt" />
                      <Label htmlFor="option-shirt" className="flex items-center">
                        <Shirt className="h-4 w-4 mr-1" /> Shirt
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pant" id="option-pant" />
                      <Label htmlFor="option-pant" className="flex items-center">
                        <Scissors className="h-4 w-4 mr-1" /> Pants
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="upload-name">Item Name</Label>
                  <Input 
                    id="upload-name"
                    value={uploadName}
                    onChange={(e) => setUploadName(e.target.value)}
                    placeholder="Enter item name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="upload-file">Upload Image</Label>
                  <div className="flex items-center gap-2">
                    <Input 
                      id="upload-file"
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      onChange={handleFileChange}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:font-medium file:bg-primary/10 hover:file:bg-primary/20"
                    />
                  </div>
                </div>

                {uploadPreview && (
                  <div className="aspect-square w-full max-h-64 mx-auto bg-muted/50 flex items-center justify-center rounded-md overflow-hidden">
                    <img 
                      src={uploadPreview} 
                      alt="Preview" 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}
              </div>
              <DialogFooter className="mt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                  disabled={isUploading}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={isUploading || !uploadFile}>
                  {isUploading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload & Process
                    </>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    );
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">Clothing Catalog</h2>
            <p className="text-muted-foreground">
              Browse and manage your clothing items for virtual try-on
            </p>
          </div>
          <Button variant="outline" onClick={fetchCatalog} disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>

        <Tabs defaultValue="shirts" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="shirts" className="flex items-center">
              <Shirt className="h-4 w-4 mr-2" />
              Shirts & Tops
            </TabsTrigger>
            <TabsTrigger value="pants" className="flex items-center">
              <Scissors className="h-4 w-4 mr-2" />
              Pants & Bottoms
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="shirts">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : catalogData?.shirts?.length ? (
              <ScrollArea className="h-[500px] w-full rounded-md">
                {renderCatalogItems(catalogData.shirts, 'shirt')}
              </ScrollArea>
            ) : (
              <div className="text-center p-12 bg-muted/50 rounded-lg">
                <p className="text-muted-foreground">No shirts found in your catalog.</p>
                <Button className="mt-4" onClick={() => setIsDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Shirt
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="pants">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : catalogData?.pants?.length ? (
              <ScrollArea className="h-[500px] w-full rounded-md">
                {renderCatalogItems(catalogData.pants, 'pant')}
              </ScrollArea>
            ) : (
              <div className="text-center p-12 bg-muted/50 rounded-lg">
                <p className="text-muted-foreground">No pants found in your catalog.</p>
                <Button className="mt-4" onClick={() => setIsDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Your First Pants
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Catalog; 