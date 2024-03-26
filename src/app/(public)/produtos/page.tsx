import AsideMenu from "@/components/layout/produtos/AsideMenu";

const produtos = () => {
  return (
    <div className="flex justify-center items-start flex-wrap bg-[#ece9c0]">
      <div className="flex lg:container border  w-full">
        {/* Left Side */}
        <div className="w-1/3 text-xs sm:text-sm md:text-base">
          <AsideMenu />
        </div>

        {/* Right Side */}
        <div className="w-2/3">
          <h1>Produtos</h1>
        </div>
      </div>
    </div>
  );
};

export default produtos;
