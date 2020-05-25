import React from 'react'

const styles = {
    form: {
        display: 'flex',
        justifyContent: 'center',
    },
}

function FormRegistration() {
  
    let [inputUser, setValue] = React.useState(" ")

    function handleChange(event) {
        setValue(
            inputUser = event.target.value
        )
    }
    
    function handleSubmit(event) {
        console.log(inputUser);
        event.preventDefault();
    }

    return (
        <div style={styles.form}>

            <form onSubmit={handleSubmit}>
                Name:
                <input id="name" type="text" value={inputUser.name} onChange={handleChange} />
                Surname:
                <input id="surname" type="text" value={inputUser.surname} onChange={handleChange} />
                <input type="submit" value="Сохранить" />
             </form>

        </div>
    )
}

export default FormRegistration;