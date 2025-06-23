import cv2
import numpy as np

class SkinToneClassifier:
    @staticmethod
    def analyze(image_path, tone_palette="perla", n_dominant_colors=3, return_report_image=True):
        """
        Analyze skin tone from an image
        """
        try:
            # Read the image
            img = cv2.imread(image_path)
            if img is None:
                raise Exception("Could not read image")

            # Convert to RGB
            img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

            # Load face cascade classifier
            face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
            
            # Convert to grayscale for face detection
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            faces = face_cascade.detectMultiScale(gray, 1.3, 5)

            if len(faces) == 0:
                return {'faces': []}

            # Process the first face
            x, y, w, h = faces[0]
            face_roi = img_rgb[y:y+h, x:x+w]

            # Calculate average skin tone
            avg_color = np.mean(face_roi, axis=(0, 1))
            skin_tone = '#{:02x}{:02x}{:02x}'.format(
                int(avg_color[0]), int(avg_color[1]), int(avg_color[2])
            )

            # Generate dominant colors (simplified)
            dominant_colors = [
                {'color': skin_tone, 'percent': 100}
            ]

            # Create report image if requested
            report_image = None
            if return_report_image:
                report_image = img.copy()
                cv2.rectangle(report_image, (x, y), (x+w, y+h), (0, 255, 0), 2)

            return {
                'faces': [{
                    'skin_tone': skin_tone,
                    'dominant_colors': dominant_colors
                }],
                'report_images': {'face': report_image} if report_image is not None else {}
            }

        except Exception as e:
            print(f"Error in SkinToneClassifier.analyze: {str(e)}")
            return {'faces': []} 