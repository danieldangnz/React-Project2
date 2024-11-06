function Demo4() {

  let uploadFile = (event) => {
    if (event.target.files.length > 0) {
			document.getElementById('preview-image').src = URL.createObjectURL(event.target.files[0],	);
			document.getElementById('preview-image').style.display = 'block';
		}
		  //reset file input once you're done
		  //document.getElementById('file-input').value = null;
  }

  return (<>
      <h1>Demo 4</h1>
      <label for="file-input">Upload image</label>
      <br />
      <input id="file-input" type="file" accept="image/*" onChange={(event) => uploadFile(event)}/>
      <br />
      <img id="preview-image" src="#" alt="upload image" height="200px" />
    </>
  );
}
  
export default Demo4;