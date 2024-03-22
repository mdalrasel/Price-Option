import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {name, price, features} =option 
    return (
        <div className='bg-green-900 p-2 rounded-lg text-white flex flex-col text-center space-y-4'>
            <h2 className='text-5xl'> {price}</h2>
            <h2 className='text-3xl'>{name}</h2>
            <div  className='pl-10 flex-grow'>
            {
                features.map((feature,index) => <Feature key={index}  feature={feature}></Feature>)
            }
            </div>
            <button className='bg-red-400  py-2 rounded-xl text-black font-semibold text-xl hover:bg-red-500'>Buy Now</button>
        </div>
    );
};


PriceOption.propTypes = {
    option: PropTypes.object
  };
export default PriceOption;