import { useState, FormEvent, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Shirt, ShoppingBag, Camera, Upload, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Switch } from "@/components/ui/switch";
import { Link } from "react-router-dom";

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

const TryOn = () => {
  const [topwear, setTopwear] = useState("0");
  const [pant, setPant] = useState("0");
  const [modelImage, setModelImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [useCamera] = useState(true);
  const [catalogData, setCatalogData] = useState<CatalogData | null>(null);
  const [isLoadingCatalog, setIsLoadingCatalog] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchCatalog();
  }, []);

  const fetchCatalog = async () => {
    try {
      setIsLoadingCatalog(true);
      const response = await fetch('/api/catalog');
      const data = await response.json();
      setCatalogData(data);
    } catch (error) {
      console.error("Error fetching catalog:", error);
      toast({
        title: "Error",
        description: "Failed to load the clothing catalog. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoadingCatalog(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (topwear === "0" && pant === "0") {
      toast({
        title: "Selection required",
        description: "Please select at least one item to try on",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Call the Flask API
      const response = await fetch('/api/tryon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          shirt: topwear,
          pant: pant,
          use_camera: useCamera
        }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        if (data.redirect) {
          // For camera-based try-on, redirect to the camera page
          window.location.href = data.url;
          return;
        }
        
        setModelImage(data.image_url);
        toast({
          title: "Try-on complete",
          description: "Your virtual try-on has been generated successfully",
        });
      } else {
        throw new Error(data.error || "An unknown error occurred");
      }
    } catch (error) {
      console.error("Error in try on process:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to generate virtual try-on",
        variant: "destructive"
      });
      
      // For demo purposes, still show a preview
      setModelImage("/static/assets/demo-tryon.jpg");
    } finally {
      setIsLoading(false);
    }
  };

  const getFullImageUrl = (path: string) => {
    if (path.startsWith('http')) return path;
    return `${window.location.origin}${path}`;
  };

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Virtual Try-On Experience</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            See exactly how clothes will look on you with our AI-powered virtual fitting room.
          </p>
          <Link to="/catalog" className="mt-4 inline-flex items-center text-primary hover:underline">
            <Upload className="h-4 w-4 mr-2" /> Browse or add clothes to your catalog
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side - Controls */}
          <Card className="shadow-lg backdrop-blur-sm bg-white/5 border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Try On Clothes
              </CardTitle>
              <CardDescription>
                Select items from our collection to see how they look on a model
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Tabs defaultValue="outfit" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="outfit">Complete Outfit</TabsTrigger>
                    <TabsTrigger value="individual">Individual Items</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="outfit" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="topwear" className="flex items-center gap-2">
                        <Shirt className="h-4 w-4" /> Select Topwear
                      </Label>
                      <Select value={topwear} onValueChange={setTopwear}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a topwear" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Select a topwear</SelectItem>
                          {isLoadingCatalog ? (
                            <SelectItem value="loading" disabled>
                              <div className="flex items-center">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Loading shirts...
                              </div>
                            </SelectItem>
                          ) : (
                            catalogData?.shirts.map((shirt) => (
                              <SelectItem key={shirt.id} value={shirt.id}>
                                {shirt.name}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="pant" className="flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4" /> Select Pants
                      </Label>
                      <Select value={pant} onValueChange={setPant}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select pants" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0">Select pants</SelectItem>
                          {isLoadingCatalog ? (
                            <SelectItem value="loading" disabled>
                              <div className="flex items-center">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Loading pants...
                              </div>
                            </SelectItem>
                          ) : (
                            catalogData?.pants.map((pant) => (
                              <SelectItem key={pant.id} value={pant.id}>
                                {pant.name}
                              </SelectItem>
                            ))
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="individual" className="space-y-4 pt-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      Select an individual item to try on separately
                    </p>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <Button
                          type="button" 
                          variant="outline"
                          className="py-6 flex flex-col items-center justify-center h-full"
                          onClick={() => {
                            setTopwear("1");
                            setPant("0");
                          }}
                        >
                          <Shirt className="h-8 w-8 mb-2" />
                          <span>Shirts</span>
                        </Button>
                        
                        <Button
                          type="button" 
                          variant="outline"
                          className="py-6 flex flex-col items-center justify-center h-full"
                          onClick={() => {
                            setTopwear("0");
                            setPant("1");
                          }}
                        >
                          <ShoppingBag className="h-8 w-8 mb-2" />
                          <span>Pants</span>
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Separator />
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Camera className="h-4 w-4 text-muted-foreground" />
                    <Label htmlFor="camera-mode" className="text-sm text-muted-foreground">
                      Use camera for try-on
                    </Label>
                  </div>
                  <Switch id="camera-mode" disabled={true} checked={useCamera} />
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Generate Try-On
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
          
          {/* Right side - Preview */}
          <Card className="shadow-lg backdrop-blur-sm bg-white/5 border-accent/20">
            <CardHeader>
              <CardTitle>Preview</CardTitle>
              <CardDescription>
                See how your selected items look together
              </CardDescription>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={3/4} className="bg-muted rounded-md overflow-hidden">
                {modelImage ? (
                  <img 
                    src={getFullImageUrl(modelImage)} 
                    alt="Virtual try-on result" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error(`Failed to load image: ${modelImage}`);
                      e.currentTarget.src = "/placeholder-image.png";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-4">
                    <div className="text-center space-y-4">
                      <Camera className="h-12 w-12 mx-auto text-muted-foreground/50" />
                      <p className="text-muted-foreground">
                        Your virtual try-on will appear here
                      </p>
                      <p className="text-xs text-muted-foreground/70">
                        Select items and click "Generate Try-On" to visualize your outfit
                      </p>
                    </div>
                  </div>
                )}
              </AspectRatio>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            For a more immersive experience, try our AR-based virtual try-on by clicking the "Generate Try-On" button
          </p>
        </div>
      </div>
    </section>
  );
};

export default TryOn; 