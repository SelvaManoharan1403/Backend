import React, { useState } from 'react'
import { Typography } from '@mui/material';
import TableList from '../../components/Table'
import Widget from '../../components/Widget'
import Chart from '../../components/Chart'
import Featured from '../../components/Featured'
import { useUserContext } from '../../context/userContext'
import { useEffect } from 'react';
import AuthService from '../../api/Services/auth.service';

const Dashboard = () => {
  const {userValue, user } = useUserContext();
  const [dataDetail, setDataDetail] = useState('')

  useEffect(() => {
    AuthService.privateUser().then(
      (res) => {
        setDataDetail(res.data);
        userValue(res.data)
      },
      error => {
        //toast.error(error.response.data.message)
      }
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Typography component="h1" variant="h5">Dashboard <b>Context:</b> {user.userValue} || <b>API:</b> {dataDetail}</Typography>
      <div className="widget">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
      </div>
      <div className="charts">
          <Featured />
          <Chart aspect={3/1} title='Last 6 Month (Revenue)' />
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest Transaction</div>
        <TableList />
      </div>
    </>
  )
}

export default Dashboard