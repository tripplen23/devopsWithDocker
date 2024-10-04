import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_API_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function uploadImageToCloudinary(fileBuffer: Buffer, fileName: string): Promise<string> {
   console.log('fileBuffer', fileBuffer);
   console.log('fileName', fileName);
   try {
      const cleanFileName = fileName.endsWith('.png') ? fileName.slice(0, -4) : fileName;

      const result = await cloudinary.uploader.upload(`data:image/jpeg;base64,${fileBuffer.toString('base64')}`, {
         folder: "myEvents",
         public_id: cleanFileName,
      });
      return result.secure_url;
   } catch (error) {
      throw new Error('Failed to upload image');
   }
}