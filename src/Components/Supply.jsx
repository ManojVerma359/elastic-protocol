import React from "react";
import { Container} from "react-bootstrap";

const Supply = () => {
  return (
    <>
      
       <section className='supply-bg py-5'>
<Container className='mycontainer py-5 d-flex flex-column align-items-center'>
    <h2 className='fs-52 ff-plus fw-700 line-120 text-capitalize text-white text-center mb-4'>170k Total Starting Supply</h2>
    <p className='fs-16 ff-ralway fw-500 line-183 text-center text-white '>Initial BONDing Offering (IBO)* Phases</p>
    <div className="max-853 w-100">
        <div className="overflow-x-scroll pt-70">
            <table className='w-100 min-w-768 d-flex flex-column '>
                <tr className='w-100 d-flex justify-content-between supply-border mb-2'>
                    <td className='text-white fs-18 fw-400 ff-ralway line-183 text-uppercase mb-4 text-start'>Round 1</td>
                    <td className='text-white fs-20 fw-400 ff-ralway line-183 text-uppercase mb-4 text-center'>10,000 EEFI Bonds</td>
                    <td className='text-white fs-18 fw-400 ff-ralway line-183 text-uppercase mb-4 text-end'>@ <span className='fs-36'>$12</span></td>
                </tr>
                <tr className='mb-40 d-flex justify-content-end'>
                    <td className='text-white fs-16 ff-plus line-183 fw-400'>Vested (locked) for 1 Year</td>
                </tr>
                <tr className=' w-100 d-flex justify-content-between supply-border mb-2'>
                    <td className='text-white fs-18 fw-400 ff-ralway line-183 mb-4 text-uppercase text-start'>Round 2</td>
                    <td className='text-white fs-20 fw-400 ff-ralway line-183 mb-4 text-uppercase text-center'>12,777 EEFI Bonds</td>
                    <td className='text-white fs-18 fw-400 ff-ralway line-183 mb-4 text-uppercase text-end'>@ <span className='fs-36'>$18</span></td>
                </tr>
                <tr className='mb-40 d-flex justify-content-end'>
                    <td className='text-white fs-16 ff-plus line-183 fw-400'>Vested (locked) for six months</td>
                </tr>

                <tr className='w-100 d-flex justify-content-between supply-border mb-2'>
                    <td className='text-white fs-18 fw-400 ff-ralway line-183 text-uppercase mb-4 text-start'>Round 3</td>
                    <td className='text-white fs-20 fw-400 ff-ralway line-183 text-uppercase mb-4 text-center'>25,000 EEFI Bonds</td>
                    <td className='text-white fs-18 fw-400 ff-ralway line-183 text-uppercase mb-4 text-end'>@ <span className='fs-36'>$26</span></td>
                </tr>
                <tr className='mb-100 d-flex justify-content-end'>
                    <td className='text-white fs-16 ff-plus line-183 fw-400'>No vesting or lock up periods. Available at launch.</td>
                </tr>

            </table>
        </div>
    </div>
    <p className='fs-20 ff-ralway fw-400  line-183  text-white text-center mb-4 pb-1'><span className='text-underline'> (47,777 or around</span> <span className='fs-36 text-decoration-underline mx-1 fw-400 '>28%</span> <span className='text-decoration-underline'>of total starting supply is up for IBO)</span></p>
    <p className='fs-14 op8 fw-400 ff-ralway fw-normal line-130 mb-0 text-white text-center'>Individuals who hold $EEFI will also receive an airdrop of the protocol's <span className="d-sm-block"></span> governance token $EFT ...learn more</p>
</Container>
</section > 
    </>
  );
};

export default Supply;




