import Navbar from '../components/Navbar';

const Company = () => {
  return (
    <>
      <Navbar />
      <div className='relative bg-white overflow-hidden'>
        <div className='max-w-7xl max-h-full  mx-auto'>
          <div className='z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur repellendus ab, nobis magni velit sed voluptas
              quaerat necessitatibus consectetur odit assumenda, consequatur
              quis ex aliquam, quibusdam qui incidunt corporis autem?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
