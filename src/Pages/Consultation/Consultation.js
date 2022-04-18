import React from 'react';

const Consultation = () => {
    return (
        <div id='consultation' className='mt-5 container'>
            <h3 className='text-center text-primary'> REQUEST A FREE CONSULTATION </h3>
            <p className='text-center'>It’s time to take care of your skin now!</p>

            <div className="row">
            {/* half column  */}
            <div className="col-md-6">
        
                <img className='img-fluid' src="https://i.ibb.co/Rv8yHVT/skin.jpg" alt="" />
            </div>
            {/* half column 0 */}
            <div className="col-md-6 shadow p-3">
            <form className='w-75'>
  <div class="form-group mb-4">
    <label for="exampleInputEmail1">Patient Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
  </div>

  <div class="form-group mb-4">
    <label for="exampleFormControlTextarea1">Patient Problem</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>

  <div class="form-group mb-4">
    <label for="exampleFormControlFile1">Upload Patient Skin problem</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
  </div>

  <div class="form-group mb-4">
    <label for="inputAddress">Patient Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Dhaka or Others" />
  </div>
  
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            </div>
            </div>

        </div>
        
    );
};

export default Consultation;