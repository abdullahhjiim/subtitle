import FileUpload from "../common/FileUpload";
import CategoryList from "./CategoryList";
import Contributor from "./Contributor";

const SidebarSection = () => {
  return (
    <div className="">
      <div className="">
        <FileUpload />
      </div>
      <div className="mt-4">
        <CategoryList title={"Movie Categories"} />
      </div>
      <div className="mt-4">
        <CategoryList title={"Industries"} />
      </div>
      <div className="mt-4">
        <Contributor />
      </div>
    </div>
  );
};

export default SidebarSection;
