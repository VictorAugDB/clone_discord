import React from 'react';
import ServerList from '../ServerList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChannelInfo';
import ChannelList from '../ChannelList';
import Userinfo from '../UserInfo';
import UsersList from '../UsersList';
import ChannelData from '../ChannelData';

import { Grid } from './styles'

const Layout: React.FC = () => {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelInfo />
      <ChannelList />
      <Userinfo />
      <ChannelData />
      <UsersList />
    </Grid>
  )
}

export default Layout;