import { useRef, useState } from 'react';
import './InputImage.css'

function Image() {
    const [image, setImage] = useState(null);
    const imageRef = useRef(null);

    function useDisplayImage() {
        const [result, setResult] = useState("");
        function uploader(e) {
            const imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.addEventListener("load", (e) => {
                setResult(e.target.result);
            });
            reader.readAsDataURL(imageFile);
        }
        return { result, uploader };
    }

    const { result, uploader } = useDisplayImage();

    return (
        <div className="container">
            <div className="row" id="inputPicture">
                {result && <div className="col">
                    <img ref={imageRef} className="rounded-circle" height="100px" width="100px" src={result} alt="goodpic" />
                </div>}
                <div className="col">
                    <label htmlFor="formFile" className="form-label">Pick profile picture</label>
                    <input className="form-control"
                        type="file"
                        onChange={(e) => {
                            e.preventDefault();
                            setImage(e.target.files[0]);
                            uploader(e);
                        }}
                        id="formFile"
                        placeholder="Choose profile picture"
                    >
                    </input>
                </div>
            </div>
        </div>
    );
}

export default Image;