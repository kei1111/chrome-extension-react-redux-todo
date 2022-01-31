import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { updateFilterStatus } from '../slices/todoSlice';
import { todoState } from './AppContent';

function AppHeader() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const initialFilterStatus = useSelector((state: todoState) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch();

  const updateFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };

  return (
    <div className={styles.appHeader}>
      <Button variant="primary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <div onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFilter(e)}>
        <SelectButton
          id="status"
          value={filterStatus}
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Completed</option>
        </SelectButton>
      </div>
      <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
