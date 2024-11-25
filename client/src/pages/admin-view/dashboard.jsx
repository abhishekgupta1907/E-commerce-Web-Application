/* eslint-disable react/jsx-key */
import ProductImageUpload from "@/components/admin-view/image-upload";
import { Button } from "@/components/ui/button";
import {
    addFeatureImage,
    deleteFeatureImage,
    getFeatureImages,
} from "@/store/common-slice";
import { TrashIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const AdminDashboard = () => {
    const [imageFile, setImageFile] = useState(null);
    const [uploadedImageUrl, setUploadedImageUrl] = useState("");
    const [imageLoadingState, setImageLoadingState] = useState(false);
    const dispatch = useDispatch();
    const { featureImageList } = useSelector((state) => state.commonFeature);

    console.log(uploadedImageUrl, "uploadedImageUrl");

    function handleUploadFeatureImage() {
        dispatch(addFeatureImage(uploadedImageUrl)).then((data) => {
            if (data?.payload?.success) {
                dispatch(getFeatureImages());
                setImageFile(null);
                setUploadedImageUrl("");
            }
        });
    }
    function handleDeleteImage(imageId) {
        if (!imageId) {
            console.error("Image ID is undefined");
            return;
        }

        dispatch(deleteFeatureImage(imageId)).then((data) => {
            if (data?.payload?.success) {
                dispatch(getFeatureImages());
            } else {
                console.error(
                    "Failed to delete the image:",
                    data?.payload?.message
                );
            }
        });
    }
    useEffect(() => {
        dispatch(getFeatureImages());
    }, [dispatch]);

    console.log(featureImageList, "featureImageList");

    return (
        <div>
            <ProductImageUpload
                imageFile={imageFile}
                setImageFile={setImageFile}
                uploadedImageUrl={uploadedImageUrl}
                setUploadedImageUrl={setUploadedImageUrl}
                setImageLoadingState={setImageLoadingState}
                imageLoadingState={imageLoadingState}
                isCustomStyling={true}
                // isEditMode={currentEditedId !== null}
            />
            <Button onClick={handleUploadFeatureImage} className="mt-5 w-full">
                Upload
            </Button>
            <div className="flex flex-col gap-4 mt-5">
                {featureImageList && featureImageList.length > 0
                    ? featureImageList.map((featureImgItem) => (
                          <div className="relative" key={featureImgItem.id}>
                              <img
                                  src={featureImgItem.image}
                                  className="w-full h-[300px] object-cover rounded-t-lg"
                              />
                              {console.log(featureImgItem._id)}
                              <button
                                  className="absolute top-2 right-2  text-white p-2 rounded"
                                  onClick={() =>
                                      handleDeleteImage(featureImgItem._id)
                                  }
                              >
                                  <TrashIcon className="w-5 h-5 text-red-600" />
                              </button>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default AdminDashboard;
