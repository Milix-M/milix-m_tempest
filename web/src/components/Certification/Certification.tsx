type CertProps = {
  company: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Certification: React.FC<CertProps> = ({
  company,
  title,
  description,
  icon,
}) => {
  return (
    <>
      <div className="bg-base-300 p-3 rounded">
        <div className="flex h-full w-full">
          <div className="rounded-md mr-4 items-center">
            <div className="justify-center items-center flex p-3 rounded">
              {icon}
            </div>
          </div>
          <div>
            <div className="mb-1">
              <h2 className="text-base font-semibold">{company}</h2>
              <h2 className="text-xl font-bold">{title}</h2>
            </div>
            <p className="break-words">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
