import React, {useState, FC} from 'react';
import './App.css';
import Modal from './components/Modal';

const App: FC = () => {
  const [isModal, setIsModal] = useState<boolean>(false)

  const handleOpenModal = () => setIsModal(true)
  const handleCloseModal = () => {
    setIsModal(false)

  }

  return (
    <div className="App">
      <header className="App-header">
        <button 
          onClick={handleOpenModal }
        >
            Выполнить действие
        </button>
      </header>
      <Modal
        state={isModal} 
        setState={handleCloseModal} 
      />
    </div>
  );
}

export default App;
