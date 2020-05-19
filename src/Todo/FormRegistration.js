import React from 'react'
// import PropTypes from 'prop-types'

const styles = {
    form: {
        display: 'flex',
        justifyContent: 'center',
    },
}


function FormRegistration() {

    // function showFile(input) {
    // let file = input.files[0];

    // alert(`File name: ${file.name}`); // например, my.png
    // alert(`Last modified: ${file.lastModified}`); // например, 1552830408824
    // }
    // let input = document.getElementsByName('name');
    // console.log(input.value);


        function getValue(e) {
            e.preventDefault();
            let input = document.getElementsById('input_form').value;
                console.log(input);
            console.log('По ссылке кликнули.');
          }


    return (
        <div style={styles.form}>
            <form>
                {/* <label> */}
                    <p><span style={{marginRight: '15px'}}>Имя:</span> 
                    <input type="text" id="input_form"/>
                    <button type="submit" onChange={getValue}>Your value in here</button>
                    </p>
                {/* </label>    */}
            </form>
        </div>
        
        // <input type="file" onchange={showFile}/>   
    )
}

export default FormRegistration;