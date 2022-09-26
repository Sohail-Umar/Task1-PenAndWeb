import './App.css';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='bar'>
          <h1>MEMORIES</h1>
        </div>

        <div className='col-lg-6'>
          <div className='block'>
            <div className="card" style={{ width: "15rem" }}>
              <img src="/logo192.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className=''>tags</p>
                <h5 className="card-title">Title</h5>
                <p className="card-text">Message</p>
                <div className='card-button'>
                  <div className='btn-like'>
                    <i class="fa-sharp fa-solid fa-thumbs-up"></i>
                    <button className='card-btn like'>Like</button>
                  </div>
                  <div className='btn-delete'>
                    <button className='card-btn delete'>Delete</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ width: "15rem" }}>
              <img src="/logo192.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <p className=''>tags</p>
                <h5 className="card-title">Title</h5>
                <p className="card-text">Message</p>
                <div className='card-button'>
                  <div className='btn-like'>
                    <button className='card-btn like'>Like</button>
                  </div>
                  <div className='btn-delete'>
                    <button className='card-btn delete'>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-6'>
          <div className='right-form'>
            <p>Creating a Memory</p>
            <input className='padding-input' type="text" placeholder='Creator' />
            <input className='padding-input' type="text" placeholder='Title' />
            <input className='padding-input' type="text" placeholder='Message' />
            <input className='padding-input' type="text" placeholder='Tags' />
            <input type="file" />
            <button className='button-submit' type='submit' value="submit">SUBMIT</button>
            <button className='button-clear' type='submit' value="clear">CLEAR</button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
