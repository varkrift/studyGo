import React from 'react'
// import PropTypes from 'prop-types'

function FormRegistration() {

    // function showFile(input) {
    // let file = input.files[0];

    // alert(`File name: ${file.name}`); // например, my.png
    // alert(`Last modified: ${file.lastModified}`); // например, 1552830408824
    // }

    return (
        <div style={{margin: '5rem'}}>
            <form>
                <label>
                    Имя:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Отправить" />     
            </form>
        </div>
        
        // <input type="file" onchange={showFile}/>   
    )
}

export default FormRegistration;