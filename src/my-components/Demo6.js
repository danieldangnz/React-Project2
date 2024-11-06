function Demo6() {
  
    return (<>
        <h1>Demo 6: Modal Content</h1>
        <div class="modal fade" id="authenticityModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">Statement of Authority</h3>
              </div>
              <div class="modal-body">
                <p><b>I confirm that:</b></p>
                <ul>
                  <li><p>This is an original assessment and is entirely my own work</p></li>
                  <li><p>It contains no material previously published or written by another person or myself except where due acknowledgement is made in the text.</p></li>
                  <li><p>No material which to a substantial extent, has been submitted for any other academic course, is included without acknowledgement.</p></li>
                </ul>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        {/* Shows the modal declarign statement of authenticity*/}
        <div class="row justify-content-md-center">
          <button type="button" class="btn btn-primary col-12 col-md-6 col-lg-4" data-bs-toggle="modal" data-bs-target="#authenticityModal">Statement of Authenticity</button>
        </div>
      </>
    );
  }
  
  export default Demo6;