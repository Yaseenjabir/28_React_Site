import { DataType } from "./assets/componentData";

const AuthorizedComponent: React.FC<DataType> = ({ title, img, text }) => {
  return (
    <div className="my-10 px-5 flex flex-col items-center">
      <img src={img} className="mx-auto rounded-full w-[536px]" />
      <div className="max-w-[536px]">
        <h1 className="text-2xl font-medium my-5">{title}</h1>
        <p className="font-medium">{text}</p>
      </div>
    </div>
  );
};

export default AuthorizedComponent;
