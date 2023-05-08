import CreateElement from '../logic/CreateElement';
import Ongoing from './pages/Ongoing';
import Overdue from './pages/Overdue';
import Pending from './pages/Pending';
import Completed from './pages/Completed';

export default function Page() {
  CreateElement('div', 'class', 'page', '#content', '');
  //End of Page set-up
  Ongoing();
  Overdue();
  Pending();
  Completed();
}
