import { useState } from 'react'
import './App.css'
import logo from "./assets/Blue umbrella.png"
import icon from "./assets/upload_icon.svg"
import useScript from 'react-script-hook';

function App() {
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {

		setSelectedFile(event.target.files[0]);

		setIsFilePicked(true);

  };
  const handleSubmission = () => {

  }
  return (
    <>
    
    <section class="containers">
        <input type="radio" name="color" id="color-1" checked hidden/>
        <input type="radio" name="color" id="color-2" hidden/>
        <input type="radio" name="color" id="color-3" hidden/>
        <input type="radio" name="color" id="color-4" hidden/>

        <div class="product">
            <img src={logo} alt="Product"/>
        </div>

        <div class="product-nav">
        <h2 className='text-black' style={{fontWeight:"bold",fontSize:"45px",marginBottom:"45px"}}>Custom Umbrella</h2>
            <label for="color-1" style={{marginLeft:"25px"}}></label>
            <label for="color-2" style={{marginLeft:"25px"}}></label>
            <label for="color-3" style={{marginLeft:"25px"}}></label>
            <label for="color-4" style={{marginLeft:"25px"}}></label>
          <h4 style={{fontWeight:"normal",marginTop:"15px",color:"black"}}>Customize your umbrella</h4>
          <p style={{fontWeight:"normal",marginTop:"5px",color:"black"}}>Upload a logo for an instant preview.</p>
          <p style={{fontWeight:"normal",marginTop:"5px",color:"black"}}>.png and .jpg files only. Max file size is 5 MB.</p>

          



{/* <input type="file" id="upload" hidden/>
<label for="upload" className='file_upload'>Choose file</label>
<div class="file-upload">
  <button class="file-upload-btn" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Add Image</button>

  <div class="image-upload-wrap">
    <input class="file-upload-input" type='file' onchange="readURL(this)" accept="image/*" />
    <div class="drag-text">
      <h3>Drag and drop a file or select add Image</h3>
    </div>
  </div>
  <div class="file-upload-content">
    <img class="file-upload-image" src="#" alt="your image" />
    <div class="image-title-wrap">
      <button type="button" onclick="removeUpload()" class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
    </div>
  </div>
</div> */}


{/* <div style={{background:"red"}}>
<img src={icon}/><input type="file" name="file" onChange={changeHandler} style={{width:"100px"}}/>
<span className='test'>UPLOAD LOGO</span></div>
<input type="file" name="file" onChange={changeHandler} />
{isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>

          <p>Filetype: {selectedFile.type}</p>

          <p>Size in bytes: {selectedFile.size}</p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}

      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div> */}




        </div>

    </section>


  </>
  )
}

export default App
