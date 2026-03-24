
import './style.css'
import img from '../../assets/odcha.png'

function SectionOne() { 
    return (
        <>
            <div className='section-one'>
                <div className='ss1'>
                    <h1>One platform meeting <span>all your relocation</span> needs</h1> <br />
                    <p>Get a Global Talent Visa and relocate to the UK. Start your journey now</p> <br />
                    <button className='but'>Take a scoring test</button>
                </div>
                <img src={img} alt="" />
            </div>  
        </>
    );
}

export default SectionOne;