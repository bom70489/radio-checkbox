import React, { useRef, version } from 'react';

function App() {
  
  const styles = ['bold', 'italic' , 'underline']
  const sizes = ['small', 'medium' , 'large' , 'larger']
  let checkStyles = []
  let checkSizes = ''
  const switchreq = useRef()

  const onChangeCheck = (ev) => {
    let checked = ev.target.checked
    let value = ev.target.value
    let idx = checkStyles.indexOf(value)
    if(checked && idx === -1) {
      checkStyles.push(value)
    } else {
      checkStyles.splice(idx , 1)
    }
  } 

  const onChangeRadio = (ev) => {
    checkSizes = ev.target.value
  }

  const onClickokbtn = () => {
    if(switchreq.current.checked) {
      if(checkStyles.length === 0) {
        alert("please select style")
        return
      } else if (checkSizes === '') {
          alert("please select size")
      }
    }
    let msg = 'select style(s): ' + checkStyles.join(' , ')
    msg += '\nselesct size: ' + checkSizes
    alert(msg)
  }

    
  return (
    <div className='mt-4 mx-auto p-3 rounded w-[450px] bg-[#cee]'>
        <form>
            <span>Font style:</span>&nbsp;&nbsp;
            {styles.map((st , i) => {
              return (
                <div>
                  <input type="checkbox" id={'check' + i} value={st} onChange={onChangeCheck} />
                  <label htmlFor={'check'+i}>{st}</label>
                </div>
              )
            })}
            <br />
            <span>font size:</span>&nbsp;&nbsp;
            {sizes.map((sz , i) => {
                  return (
                    <div>
                        <input type="radio" id={'radio' + i} name='font-size' value={sz} onChange={onChangeRadio} />
                        <label htmlFor={'radio' + i}>{sz}</label>
                    </div>
                  )
            })}
            <div>
              <input type="checkbox" value="require" id='sw' ref={switchreq} />
              <label htmlFor="sw">require</label>
            </div>
            <div>
              <button type='button' onClick={onClickokbtn}>OK</button>
            </div>
        </form>
    </div>
    
  ); 
}

export default App;
