import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'gradio-app': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src: string;
      };
    }
  }
}

const ThreeDGenerator = () => {
  const gradioContainerRef = useRef<HTMLDivElement>(null);

  // Create and manage the gradio-app element
  useEffect(() => {
    if (gradioContainerRef.current) {
      const gradioContainer = gradioContainerRef.current;
      gradioContainer.innerHTML = '';
      
      // Create the element manually
      const gradioElement = document.createElement('gradio-app');
      gradioElement.setAttribute('src', 'https://saadtoughal-my-3d-generator.hf.space');
      gradioContainer.appendChild(gradioElement);
      
      // Clean up
      return () => {
        gradioContainer.innerHTML = '';
      };
    }
  }, []);

  return (
    <div className="flex flex-col space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">3D Fashion Generator</h3>
        <p className="text-foreground/70">
          Create and customize 3D fashion items using artificial intelligence
        </p>
      </div>

      <Card className="shadow-lg backdrop-blur-sm bg-white/5 border-accent/20 overflow-hidden">
        <CardHeader className="pb-0">
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-blue-500" />
            AI-Powered 3D Generator
          </CardTitle>
          <CardDescription>
            Generate custom 3D models with just a few clicks
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4">
          <div 
            ref={gradioContainerRef}
            className="aspect-video w-full relative" 
          />
          
          <div className="mt-4 p-3 bg-muted/30 rounded-md text-sm text-foreground/70">
            <p>This 3D generator uses AI to transform your ideas into realistic 3D models. You can customize the output and download your creations for use in virtual try-on or other applications.</p>
          </div>
        </CardContent>
      </Card>

      {/* Loading the Gradio script directly in the component */}
      <script 
        type="module" 
        src="https://gradio.s3-us-west-2.amazonaws.com/4.44.1/gradio.js"
      ></script>
    </div>
  );
};

export default ThreeDGenerator; 