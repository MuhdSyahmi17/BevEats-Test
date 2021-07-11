import {useState} from 'react'
import Dish from './Dish.png'
import Sizes from './Sizes.png'


const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [size, setSize] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a dish')
            return
        }
        if(!size) {
            alert('Please state a size')
            return
        }

        onAdd({ text, size })

        setText('')
        setSize('')
    }

    return (
        <form className= 'add-form' onSubmit=
        {onSubmit}>
            <div className= 'form-control'>
                <label>Dishes:</label>
                <img src={Dish} alt="Dish Picture"/>
                <input type='text' placeholder='Other Speedy Dishes' 
                value={text} onChange={(e) =>
                 setText(e.target.value)}/>
            </div>
            <div className= 'form-control'>
                <label>Size: (Small/Medium/Large)</label>
                <img src={Sizes} alt="Size pic"/>
                <input type='text' placeholder='Size'
                value={size} onChange={(e) =>
                 setSize(e.target.value)}/>
            </div>
            <div className= 'form-control form-control-check'>
                <label>Get Receipt:</label>
                <input type='checkbox' />
            </div>


            <input type='submit' value='Add dish' className='btn btn-block'/>
        </form>
    )
}

export default AddTask