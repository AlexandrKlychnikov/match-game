import { useLocation } from 'react-router-dom';
import '../components/indicator.css';
       
export default function Indicator() {

    const categoryPathList = ["/ActionsSetA", "/ActionsSetB", "/AnimalsSetA", "/AnimalsSetB", "/Clothes", "/Emotions", "/Food", "/Fruits"]
    const categoryNameList = ['Actions (set A)', 'Actions (set B)', 'Animals (set A)', 'Animals (set B)', 'Clothes', 'Emotions', 'Food', 'Fruits']
    
    let location = useLocation().pathname;

    const indexArr = categoryPathList.indexOf(location);

    const categoryName = categoryNameList[indexArr]
    return (
      <div className="category-location">
        {categoryName}
      </div>
    );
  }