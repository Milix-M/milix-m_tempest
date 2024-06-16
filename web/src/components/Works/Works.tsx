type WorksProps = {
  title: string;
  description: string;
  link: string;
};

const Works: React.FC<WorksProps> = ({ title, description, link }) => {
  return (
    <>
      <div className="card w-full bg-base-300 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <a href={link} target="_blank">
              <button className="btn btn-primary">作品を見る
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
