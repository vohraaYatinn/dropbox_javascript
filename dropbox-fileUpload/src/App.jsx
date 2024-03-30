import React, { useState } from "react";
import DropboxChooser from "react-dropbox-chooser";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
	const [imageLink, setImageLink] = useState("");

	const handleSuccess = (files) => {
		console.log(files[0].thumbnailLink);
		setImageLink(files[0].thumbnailLink);

		toast.success("file uploaded successfully");
	};

	return (
		<div className="container">
			<div>
				<h1>Upload or Choose files from Dropbox!! </h1>
			</div>
			<div>
				<DropboxChooser
					appKey={"m2xcdpyziqd2ctw"}
					success={handleSuccess}
					cancel={() => toast.error("Cancelled Operation")}
					multiselect={true}></DropboxChooser>
			</div>
			<div>
				{imageLink && (
					<img src={imageLink} alt="image" width={300} height={300} />
				)}
			</div>
			<Toaster position="top-center" reverseOrder={false} />
		</div>
	);
};

export default App;
