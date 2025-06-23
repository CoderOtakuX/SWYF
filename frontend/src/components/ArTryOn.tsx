import { useState, useRef, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Camera, Upload, RefreshCw, Sparkles, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";

// Sample clothing items
const tops = [
  { id: 1, name: "White T-Shirt", image: "/assets/clothes/white-tshirt.png", price: "$19.99" },
  { id: 2, name: "Blue Denim Jacket", image: "/assets/clothes/denim-jacket.png", price: "$59.99" },
  { id: 3, name: "Black Hoodie", image: "/assets/clothes/black-hoodie.png", price: "$39.99" },
  { id: 4, name: "Striped Sweater", image: "/assets/clothes/striped-sweater.png", price: "$44.99" },
];

const bottoms = [
  { id: 1, name: "Blue Jeans", image: "/assets/clothes/blue-jeans.png", price: "$49.99" },
  { id: 2, name: "Black Dress Pants", image: "/assets/clothes/black-pants.png", price: "$69.99" },
  { id: 3, name: "Khaki Chinos", image: "/assets/clothes/khaki-chinos.png", price: "$39.99" },
  { id: 4, name: "Gray Sweatpants", image: "/assets/clothes/gray-sweatpants.png", price: "$29.99" },
];

const ArTryOn = () => {
  const [userImage, setUserImage] = useState<string | null>(null);
  const [selectedShirt, setSelectedShirt] = useState<number | null>(null);
  const [selectedPants, setSelectedPants] = useState<number | null>(null);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [step, setStep] = useState<"select" | "photo" | "result">("select");
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Check if the file is an image
    if (!file.type.startsWith("image/")) {
      toast.error("Please upload an image file.");
      return;
    }
    
    // Create URL for preview
    const reader = new FileReader();
    reader.onload = () => {
      setUserImage(reader.result as string);
      setResult(null);
    };
    reader.readAsDataURL(file);
  };
  
  const handleCameraCapture = async () => {
    setCameraActive(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      toast.error("Could not access camera. Please check permissions.");
      setCameraActive(false);
    }
  };
  
  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    if (!context) return;
    
    // Set canvas dimensions to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    // Draw video frame to canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Convert canvas to data URL
    const imageDataUrl = canvas.toDataURL('image/png');
    setUserImage(imageDataUrl);
    
    // Stop camera stream
    const stream = video.srcObject as MediaStream;
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    
    setCameraActive(false);
    setStep("result");
  };
  
  const handleTryOn = () => {
    if (selectedShirt === null || selectedPants === null) {
      toast.error("Please select both a shirt and pants.");
      return;
    }
    
    setStep("photo");
  };
  
  const processTryOn = () => {
    if (!userImage) {
      toast.error("Please take or upload a photo first.");
      return;
    }
    
    setProcessing(true);
    
    // Simulate processing with a timeout (in a real app, this would be an API call)
    setTimeout(() => {
      // Just using the user image as the result for demo purposes
      setResult(userImage);
      setProcessing(false);
      toast.success("Virtual try-on complete!");
    }, 3000);
  };
  
  const handleReset = () => {
    setUserImage(null);
    setSelectedShirt(null);
    setSelectedPants(null);
    setResult(null);
    setStep("select");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  
  const getSelectedShirtName = () => {
    if (selectedShirt === null) return "Select a shirt";
    return tops.find(shirt => shirt.id === selectedShirt)?.name || "Unknown Shirt";
  };
  
  const getSelectedPantsName = () => {
    if (selectedPants === null) return "Select pants";
    return bottoms.find(pants => pants.id === selectedPants)?.name || "Unknown Pants";
  };
  
  return (
    <div className="flex flex-col space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Virtual Try-On Experience</h3>
        <p className="text-foreground/70">
          See how clothes look on you before you buy them
        </p>
      </div>
      
      {step === "select" && (
        <div className="grid grid-cols-1 gap-8">
          <div className="glass-morphism p-6 rounded-xl">
            <h4 className="text-lg font-medium mb-4">Step 1: Select Your Outfit</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Shirts Carousel */}
              <div className="space-y-4">
                <h5 className="font-medium">Select a Shirt</h5>
                <Carousel className="w-full">
                  <CarouselContent>
                    {tops.map((shirt) => (
                      <CarouselItem key={shirt.id} className="md:basis-1/2">
                        <div 
                          className={`border rounded-lg p-3 cursor-pointer transition-all h-full ${
                            selectedShirt === shirt.id ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => setSelectedShirt(shirt.id)}
                        >
                          <div className="aspect-square bg-accent/10 rounded-md mb-2 flex items-center justify-center overflow-hidden">
                            <img 
                              src={shirt.image} 
                              alt={shirt.name} 
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-medium truncate">{shirt.name}</p>
                            <p className="text-xs text-muted-foreground">{shirt.price}</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </Carousel>
                
                <Select 
                  value={selectedShirt?.toString() || ""}
                  onValueChange={(value) => setSelectedShirt(Number(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a shirt" />
                  </SelectTrigger>
                  <SelectContent>
                    {tops.map((shirt) => (
                      <SelectItem key={shirt.id} value={shirt.id.toString()}>
                        {shirt.name} - {shirt.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Pants Carousel */}
              <div className="space-y-4">
                <h5 className="font-medium">Select Pants</h5>
                <Carousel className="w-full">
                  <CarouselContent>
                    {bottoms.map((pants) => (
                      <CarouselItem key={pants.id} className="md:basis-1/2">
                        <div 
                          className={`border rounded-lg p-3 cursor-pointer transition-all h-full ${
                            selectedPants === pants.id ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-primary/50'
                          }`}
                          onClick={() => setSelectedPants(pants.id)}
                        >
                          <div className="aspect-square bg-accent/10 rounded-md mb-2 flex items-center justify-center overflow-hidden">
                            <img 
                              src={pants.image} 
                              alt={pants.name} 
                              className="max-h-full max-w-full object-contain"
                            />
                          </div>
                          <div className="text-center">
                            <p className="text-sm font-medium truncate">{pants.name}</p>
                            <p className="text-xs text-muted-foreground">{pants.price}</p>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                </Carousel>
                
                <Select 
                  value={selectedPants?.toString() || ""}
                  onValueChange={(value) => setSelectedPants(Number(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select pants" />
                  </SelectTrigger>
                  <SelectContent>
                    {bottoms.map((pants) => (
                      <SelectItem key={pants.id} value={pants.id.toString()}>
                        {pants.name} - {pants.price}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="p-4 rounded-lg bg-accent/10 mb-6">
                <h5 className="font-medium mb-2">Selected Items:</h5>
                <p>{getSelectedShirtName()}</p>
                <p>{getSelectedPantsName()}</p>
              </div>
              
              <Button 
                onClick={handleTryOn} 
                className="w-full bg-brand-teal hover:bg-brand-teal/90"
                disabled={selectedShirt === null || selectedPants === null}
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Continue to Try On
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {step === "photo" && (
        <div className="grid grid-cols-1 gap-8">
          <div className="glass-morphism p-6 rounded-xl">
            <h4 className="text-lg font-medium mb-4">Step 2: Take Your Photo with Live Camera</h4>
            
            <div className="relative">
              {cameraActive ? (
                <div className="space-y-4">
                  <div className="relative rounded-lg overflow-hidden bg-black aspect-[3/4] max-w-xl mx-auto">
                    <video 
                      ref={videoRef} 
                      className="w-full h-full object-cover"
                      autoPlay 
                      playsInline
                    ></video>
                    <canvas ref={canvasRef} className="hidden"></canvas>
                  </div>
                  
                  <div className="flex justify-center gap-4">
                    <Button onClick={() => setCameraActive(false)} variant="outline">
                      Cancel
                    </Button>
                    <Button onClick={capturePhoto} className="bg-brand-teal hover:bg-brand-teal/90">
                      <Camera className="mr-2 h-4 w-4" />
                      Capture Photo
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {userImage ? (
                    <div className="border-2 rounded-lg p-4 h-80 flex flex-col items-center justify-center">
                      <img 
                        src={userImage} 
                        alt="Your photo" 
                        className="max-h-full max-w-full object-contain rounded"
                      />
                    </div>
                  ) : (
                    <div 
                      className="border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center border-border h-80 cursor-pointer hover:bg-accent/5 transition-colors"
                      onClick={handleCameraCapture}
                    >
                      <Camera className="h-16 w-16 text-primary mb-4" />
                      <h3 className="text-xl font-medium mb-2">Launch Live Camera</h3>
                      <p className="text-center text-foreground/70 max-w-sm">
                        Our AI will create your digital twin for perfect virtual fitting
                      </p>
                      <Button 
                        className="mt-6 bg-brand-teal hover:bg-brand-teal/90"
                        onClick={handleCameraCapture}
                      >
                        <Camera className="mr-2 h-4 w-4" />
                        Start Camera
                      </Button>
                    </div>
                  )}
                  
                  <div className="flex gap-4">
                    <Button 
                      onClick={() => setStep("select")} 
                      variant="outline"
                      className="flex-1"
                    >
                      Back to Selection
                    </Button>
                    
                    {userImage ? (
                      <Button 
                        onClick={processTryOn} 
                        className="flex-1 bg-brand-teal hover:bg-brand-teal/90"
                        disabled={processing}
                      >
                        {processing ? (
                          <>
                            <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <Sparkles className="mr-2 h-4 w-4" />
                            Generate Try-On
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => fileInputRef.current?.click()} 
                        variant="outline" 
                        className="flex-1"
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Or Upload Photo
                      </Button>
                    )}
                    
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                      accept="image/*"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {step === "result" && result && (
        <div className="grid grid-cols-1 gap-8">
          <div className="glass-morphism p-6 rounded-xl">
            <h4 className="text-lg font-medium mb-4">Try-On Result</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative bg-accent/10 rounded-lg p-2 flex items-center justify-center">
                <img 
                  src={result} 
                  alt="Try-on result" 
                  className="max-h-[500px] max-w-full object-contain"
                />
                <div className="absolute bottom-3 right-3 bg-background/80 px-3 py-1 rounded-full text-xs">
                  Demo Preview
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-accent/10">
                  <h5 className="font-medium mb-2">Your Selected Outfit:</h5>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="p-2 border rounded-md">
                      <p className="text-sm font-medium">{getSelectedShirtName()}</p>
                      <p className="text-xs text-muted-foreground">
                        {tops.find(shirt => shirt.id === selectedShirt)?.price}
                      </p>
                    </div>
                    <div className="p-2 border rounded-md">
                      <p className="text-sm font-medium">{getSelectedPantsName()}</p>
                      <p className="text-xs text-muted-foreground">
                        {bottoms.find(pants => pants.id === selectedPants)?.price}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm">
                    Total: $
                    {(
                      parseFloat(tops.find(shirt => shirt.id === selectedShirt)?.price.replace('$', '') || '0') +
                      parseFloat(bottoms.find(pants => pants.id === selectedPants)?.price.replace('$', '') || '0')
                    ).toFixed(2)}
                  </p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Button className="bg-primary hover:bg-primary/90">
                    Add to Cart
                  </Button>
                  
                  <Button variant="outline">
                    Share Your Look
                  </Button>
                  
                  <Button 
                    onClick={handleReset} 
                    variant="outline"
                  >
                    Try Different Outfit
                  </Button>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-foreground/60 mt-8 italic">
              Note: This is a demonstration. In a real application, advanced AI would generate a realistic image of you wearing the selected items.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArTryOn;
