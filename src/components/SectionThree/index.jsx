import './style.css'
import sec1 from "../../assets/sectionThree1.svg"
import sec2 from "../../assets/sectionThree2.svg"

function SectionThree() {
    return (
        <>
            <div className="container">
                <div className='intro_section_three'>
                    <h1 className='section_three_first_h1'>
                        How can I start my
                        <br />
                        Global Talent Visa case?
                    </h1>
                    <p className='section_three_intro_text'>Is here to guide you on every step of preparing a case and becoming a Global Talent. To start your UK relocation journey choose a preferred route on our Platform:</p>
                </div>


                <div className='wrapper_section_three'>

                    <div className='wrapper_left'>
                        <h1 style={{ marginBottom: "25px" }}>£5,500</h1>
                        <div className='section_three_first_div'>
                            <img src={sec1} alt="" />
                            <p style={{ width: "482px", fontSize: "15px" }}>Paid in 2 instalments — pre-payment when signing the contract and post-payment after receiving the Endorsement.</p>
                        </div>
                        <div className='section_three_second_div'>
                            <img src={sec2} alt="" />
                            <p style={{ width: "482px", fontSize: "15px" }}>Paid in 5 five equal instalments first of which is payable when signing the contract, and the remaining four payments with an interval of one month.</p>
                        </div>
                        <p style={{ width: "504px", fontSize: "13px" }}>*In case of the second failed attempt to get the Endorsement, you are entitled to a 70% refund of the amount payed.</p>
                        <p style={{ width: "504px", margin: "20px 0", fontSize: "13px" }}>*Pay the entire amount and receive an extra 15% discount.</p>
                        <button className='btn_section_three'>Сhoose</button>
                    </div>

                    <div className='wrapper_left'>
                        <h1 style={{ marginBottom: "25px" }}>£4,000</h1>
                        <div className='section_three_first_div'>
                            <img src={sec1} alt="" />
                            <p style={{ width: "482px", fontSize: "15px" }}>Paid in 2 instalments — pre-payment when signing the contract and post-payment after receiving the Endorsement.</p>
                        </div>
                        <div className='section_three_second_div'>
                            <img src={sec2} alt="" />
                            <p style={{ width: "482px", fontSize: "15px" }}>Paid in 5 five equal instalments first of which is payable when signing the contract, and the remaining four payments with an interval of one month.</p>
                        </div>
                        <p style={{ width: "504px", fontSize: "13px" }}>*Pay the entire amount and receive an extra 15% discount.</p>
                        <p style={{ width: "504px", margin: "20px 0", fontSize: "13px" }}>*Non-refundable rate</p>
                        <button className='second_btn_section_three'>Сhoose</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default SectionThree;
