import profile from '../../assets/images/profile.png'

const Nav = () => {
    return (
      <div className="border-b-1   mx-4 ">
        <nav className="flex justify-between items-center  my-2 ">
          <h3 className="text-2xl font-bold">Knowldge cafe</h3>
          <img className="" src={profile} alt="" />
          
        </nav>
      </div>
    );
};

export default Nav;