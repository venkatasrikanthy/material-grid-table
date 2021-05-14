import React, { Component } from "react";
import Loader from 'react-loader';

// importing Table grid component
import TableGrid from './Components/tableGrid/tableGrid.js';

// importing modal popup component
import ModalPopup from './Components/modalPopup/modalPopup';

import { Constants } from './Utils/constants';
import { UserService } from './Utils/userService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      usersList: [],
      recordsCount: 0,
      modalContent: {},
      isModalOpen: false,
      isDataLoaded: false
    };

    this.openModalPopup = this.openModalPopup.bind(this);
    this.closeModalPopup = this.closeModalPopup.bind(this);
  }

  componentDidMount() {
    this.fetchUsersData();
  }

  fetchUsersData() {
    let url = Constants.GET_USERS;
    UserService.fetchUsers(url)
      .then(data => {
        this.setState({ isDataLoaded: true, usersList: data, recordsCount: data.length });
      })
      .catch(error => {
        this.setState({ isDataLoaded: true, usersList: [], recordsCount: 0 });
      })
  }

  // opening the model popup to show company details of the respective detail button click
  openModalPopup(data) {
    // console.log('Company Details:: ', data ? data.company : '');
    this.setState({ isModalOpen: true, modalContent: data.company });
  }

  closeModalPopup() {
    this.setState({ isModalOpen: false });
  }

  render() {
    const { usersList, recordsCount, modalContent, isModalOpen, isDataLoaded } = this.state;
    return (
      <div className="page-container">
        <Loader loaded={isDataLoaded} options={{color: '#122665'}} className="spinner">
          <p className="total-records">Total Number of Records - <span>{recordsCount}</span></p>
          <TableGrid data={usersList} openModalPopup={e => this.openModalPopup(e)} />
        </Loader>
        <ModalPopup popupTitle="Edit Company Details" modalContent={modalContent} isModalOpen={isModalOpen} onModalClose={e => this.closeModalPopup()} />
      </div>
    );
  }
}

export default App;
