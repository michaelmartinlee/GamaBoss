import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import { images } from "../../assets";
import { mockPet } from "../../components/PetAvatar/mock";
import { mockVerification } from "./mock";
import { icons } from "../../assets";
import { Link } from "react-router-dom";

export default function Verification() {
  return (
    <main className="grid justify-items-center">
      <img
        src={images.dogConf}
        className="w-screen md:absolute md:left-0 md:h-[468px]"
        alt=""
      />
      <div className="grid justify-items-center w-full z-10 md:rounded-[32px] md:border-2 md:border-primary-blue-1 md:mt-60 md:w-[500px] md:bg-white mb-32">
        <p className="text-2xl mt-10 ml-6 mr-6">
          <span className="text-primary-blue-1"> {mockPet.name} </span>
          {` está próximo de ter ainda mais proteção!`}
        </p>
        <div className="">
          <p className="pl-6 pr-4 text-base pt-10">
            Ao confirmar os serviços <strong>adicionados</strong>, você receberá
            um e-mail de confirmação das alterações do seu plano atual.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 items-center mt-10 pl-2 pr-2">
          <div className="">
            <img
              className="pr-[10px] inline-block"
              src={icons.iconCheck}
              alt="icon check"
            />
            <span className="">{mockVerification.servico1}</span>
          </div>
          <div className="">
            <img
              className="pr-[10px] inline-block"
              src={icons.iconCheck}
              alt="icon check"
            />
            <span className="">{mockVerification.servico2}</span>
          </div>
          <div className="">
            <img
              className="pr-[10px] inline-block"
              src={icons.iconCheck}
              alt="icon check"
            />
            <span className="">{mockVerification.servico3}</span>
          </div>
          <div className="">
            <img
              className="pr-[10px] inline-block"
              src={icons.iconCheck}
              alt="icon check"
            />
            <span className="">{mockVerification.servico4}</span>
          </div>
        </div>
        <div className="mt-10">
          <CheckBox labelContent={"Li os termos e confirmo a altereção"} />
        </div>
        <div className="sm:font-sans gap-6 flex flex-col-reverse md:flex-row items-center mt-10 mb-12">
          <Link to={"/alterar"}>
            <Button
              className="text-black pt-2 pb-2 pr-7 pl-7 border-solid border-2 border-primary-blue-1 bg-white shadow-lg "
              buttonLabel={"Cancelar"}
            />
          </Link>
          <Link to={"/concluido"}>
            <Button
              className="pt-2 pb-2 pr-7 pl-7 shadow-lg"
              buttonLabel={"Confirmar"}
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
