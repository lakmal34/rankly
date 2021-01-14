import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './utility.less';
import './App.less';
import { Button,Divider,Form,Input,Select,Upload,message,Card,Typography,Dropdown,Menu,Image,Radio,Checkbox,Tabs,Modal } from 'antd';
import { PlusOutlined,MoreOutlined,HeartOutlined,MessageOutlined,ShareAltOutlined,SearchOutlined,BellOutlined,HomeOutlined,FileAddOutlined,MailOutlined,UpOutlined,DownOutlined,AppstoreOutlined,UnorderedListOutlined,FilterOutlined } from '@ant-design/icons';

import logo from './assets/img/logoPlaceholder.png';
import avatar from './assets/img/avatar.png';
import bookmark from './assets/img/bookmark.svg';
import facebook from './assets/img/facebook.svg';
import google from './assets/img/google.svg';

const { TabPane } = Tabs;
const { Option } = Select;
const { Title } = Typography;
const { Dragger } = Upload;
const { Text } = Typography;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export default function BasicExample() {
  return (
  <Router>
    <Switch>
      <Route path="/bookmarkList">
        <BookmarkList />
      </Route>
      <Route path="/favouriteList">
        <FavouriteList />
      </Route>
      <Route path="/filterlist">
        <FilterList />
      </Route>
      <Route path="/listdetails">
        <ListDetails />
      </Route>
      <Route path="/listfeed">
        <ListFeed />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup3">
        <Signup3 />
      </Route>
      <Route path="/signup2">
        <Signup2 />
      </Route>
      <Route path="/">
        <Signup />
      </Route>
    </Switch>
  </Router>
  );
}

function Signup() {
  return (
    <div>
      <div className="container-fluid px-0">
          <div className="container navBar">
            <div className="d-flex flex-row py-2 align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <img src={logo} className="Applogo mr-3" alt="logo" />
                <h2 className="my-0">Ranklys</h2>
              </div>
            </div>
          </div>
        <Divider className="my-0"/>
      </div>
      <div className="container h-100 d-flex flex-column signupContainer">
          <div className="row h-100">
            <div className="d-none d-sm-none d-md-flex col-md-6 col-lg-6 h-100 overflow-hidden align-items-center justify-content-center">
              <Image
                preview={false}
                width={'100%'}
                src="https://tinyurl.com/y2gh67jy"
              />
            </div>
            <div className="col-md-6 col-lg-6 h-100">
              <div className="d-flex flex-column justify-content-center h-100">
              <div className="px-0">
                <h2>Signup</h2>
                <p>By continuing, you agree to our <Link to="">User Agrement</Link> and <Link to="">Privacy Policy</Link>.</p>
              </div>
              <div className="mt-4 px-0">
                <Button type="primary" ghost className="d-flex flex-row align-items-center w-100 mb-2">
                  <span className="mr-3"><img src={google} style={{ width: '18px'}}/></span>
                  <span>CONTINUE WITH GOOGLE</span>
                </Button>
                <Button type="primary" ghost className="d-flex flex-row align-items-center w-100">
                <span className="mr-3"><img src={facebook} style={{ width: '18px'}}/></span>
                  <span>CONTINUE WITH FACEBOOK</span>
                </Button>
              </div>
              <div className="px-0">
                <Divider>OR</Divider>
              </div>
              <div className="px-0">
                <Form layout="vertical">
                  <Form.Item>
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item>
                    <Input placeholder="Password" />
                  </Form.Item>
                </Form>
              </div>
              <div className="px-0">
                <Button type="primary" className="w-100"><Link to="/Signup2">Continue</Link></Button>
              </div>
              <div className="mt-4 px-0">
                <p>Already have an account?<Link>Login</Link>.</p>
              </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

function Signup2(){
  return (
    <div>
      <div className="container-fluid px-0">
          <div className="container navBar">
            <div className="d-flex flex-row py-2 align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <img src={logo} className="Applogo mr-3" alt="logo" />
                <h2 className="my-0">Rankly</h2>
              </div>
            </div>
          </div>
        <Divider className="my-0"/>
      </div>
      <div className="container h-100 d-flex flex-column justify-content-center signupContainer">
          <div className="row h-100">
            <div className="d-none d-sm-none d-md-flex col-md-6 col-lg-6 h-100 overflow-hidden align-items-center justify-content-center">
                <Image
                  preview={false}
                  width={'100%'}
                  src="https://tinyurl.com/y2gh67jy"
                />
              </div>
            <div className="col-md-6 col-lg-6 h-100">
              <div className="d-flex flex-column justify-content-center h-100">
              <div className="px-0">
                <h2>Signup</h2>
                <p>By continuing, you agree to our <Link to="">User Agrement</Link> and <Link to="">Privacy Policy</Link>.</p>
              </div>
                <Form layout="vertical" className="mt-4">
                <div className="row">
                  <div className="col-12 mb-2">
                    <b>What is your name</b>
                  </div>
                  <div className="col-6">
                    <Form.Item>
                      <Input placeholder="Email" />
                    </Form.Item>
                  </div>
                  <div className="col-6">
                    <Form.Item>
                      <Input placeholder="Password" />
                    </Form.Item>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12 mb-2">
                    <b>When is your birthday</b>
                  </div>
                  <div className="col-4">
                    <Select defaultValue="Day" className="w-100">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </div>
                  <div className="col-4">
                    <Select defaultValue="Month" className="w-100">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </div>
                  <div className="col-4">
                    <Select defaultValue="Year" className="w-100">
                      <Option value="jack">Jack</Option>
                      <Option value="lucy">Lucy</Option>
                      <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 mb-2">
                    <b>Your phone number</b>
                  </div>
                  <div className="col-12">
                  <Form.Item>
                      <Input placeholder="Password" />
                    </Form.Item>
                  </div>
                </div>
              </Form>
              <div>
                <Button type="primary" className="w-100"><Link to="/Signup3">Continue</Link></Button>
              </div>
              </div>
            </div>
            
          </div>
      </div>
    </div>
  );
}

function Signup3(){
  return(
    <div>
      <div className="container-fluid px-0">
          <div className="container navBar">
            <div className="d-flex flex-row py-2 align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <img src={logo} className="Applogo mr-3" alt="logo" />
                <h2 className="my-0">Rankly</h2>
              </div>
            </div>
          </div>
        <Divider className="my-0"/>
      </div>
      <div className="container h-100 d-flex flex-column justify-content-center signupContainer">
        <div className="row h-100">
        <div className="d-none d-sm-none d-md-flex col-md-6 col-lg-6 h-100 overflow-hidden align-items-center justify-content-center">
        <Image
        preview={false}
        width={'100%'}
        src="https://tinyurl.com/y2gh67jy"
        />
        </div>
          <div className="col-md-6 col-lg-6 h-100">
            <div className="d-flex flex-column justify-content-center h-100">
              <div className="px-0">
                <h2>Signup</h2>
                <p>By continuing, you agree to our <Link to="">User Agrement</Link> and <Link to="">Privacy Policy</Link>.</p>
              </div>
              <div className="mt-4">
                <div className="mb-2">
                  <b>Your phone number</b>
                </div>
                <div>
                  <Form.Item>
                    <Input placeholder="Password" />
                  </Form.Item>
                </div>
              </div>
              <div>
                <div className="mb-2">
                  <b>Upload profile picture</b>
                </div>
                <div>
                  <Dragger {...props} className="py-4">
                    <p className="ant-upload-drag-icon mb-2">
                      <PlusOutlined style={{ fontSize: '18px'}} />
                    </p>
                    <p className="ant-upload-hint">Upload</p>
                  </Dragger>
                </div>
              </div>
              <div className="mt-3">
                <Button type="primary" className="w-100"><Link to="/Signup3">Continue</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Login(){
  return(
    <div>
      <div className="container-fluid px-0">
          <div className="container navBar">
            <div className="d-flex flex-row py-2 align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <img src={logo} className="Applogo mr-3" alt="logo" />
                <h2 className="my-0">Rankly</h2>
              </div>
            </div>
          </div>
        <Divider className="my-0"/>
      </div>
      <div className="container h-100 d-flex flex-column signupContainer">
          <div className="row h-100">
            <div className="d-none d-sm-none d-md-flex col-md-6 col-lg-6 h-100 overflow-hidden align-items-center justify-content-center">
              <Image
                preview={false}
                width={'100%'}
                src="https://tinyurl.com/y2gh67jy"
              />
            </div>
            <div className="col-md-6 col-lg-6 h-100">
              <div className="d-flex flex-column justify-content-center h-100">
              <div className="px-0">
                <h2>Login</h2>
                <p>By continuing, you agree to our <Link to="">User Agrement</Link> and <Link to="">Privacy Policy</Link>.</p>
              </div>
              <div className="mt-4 px-0">
                <Button type="primary" ghost className="d-flex flex-row align-items-center w-100 mb-2">
                  <span className="mr-3"><img src={google} style={{ width: '18px'}}/></span>
                  <span>CONTINUE WITH GOOGLE</span>
                </Button>
                <Button type="primary" ghost className="d-flex flex-row align-items-center w-100">
                <span className="mr-3"><img src={facebook} style={{ width: '18px'}}/></span>
                  <span>CONTINUE WITH FACEBOOK</span>
                </Button>
              </div>
              <div className="px-0">
                <Divider>OR</Divider>
              </div>
              <div className="px-0">
                <Form layout="vertical">
                  <Form.Item>
                    <Input placeholder="Email" />
                  </Form.Item>
                  <Form.Item>
                    <Input placeholder="Password" />
                  </Form.Item>
                </Form>
              </div>
              <div className="px-0">
                <Button type="primary" className="w-100"><Link to="/Signup2">Continue</Link></Button>
              </div>
              <div className="mt-4 px-0">
                <p>Already have an account?<Link>Login</Link>.</p>
              </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

const ListFeed = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
              <h2 className="my-0">Rankly</h2>
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="mr-4"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container listFeed pt-4">
        <div className="row">
          <div className="col-12 col-lg-4 mb-3 listFeedCard">
              <Card>
                  <div className="cardHead">
                    <div className="cardHeadLeft d-flex flex-row align-items-center">
                      <img src={avatar} className="cardImg"/>
                      <div className="d-flex flex-column ml-2">
                        <Text type="primary">Jane Cooper</Text>
                        <Text type="secondary">Musician | Vocalist</Text>
                      </div>
                    </div>
                    <div className="cardHeadRight">
                      <Dropdown overlay={menu} placement="bottomRight">
                        <MoreOutlined style={{ fontSize: '24px'}} />
                      </Dropdown>
                    </div>
                  </div>
                  <Link to="/ListDetails">
                    <div className="cardBody pt-3">
                      <Text type="primary" strong>The best wireless headphones you can buy in 2020 so far</Text>
                      <div className="cardBodyImgWrap mt-2">
                        <Image
                          width={'100%'}
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                          preview={
                            false
                          }
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="cardExpert py-2">
                    <div className="cardExpertLeft">
                      <div className="facepile">
                        <div className="cardImgWrap">
                          <img src="https://tinyurl.com/y44o75ox" className="cardImg"/>
                        </div>
                        <div className="cardImgWrap">
                          <img src="https://tinyurl.com/y6oe9zfe" className="cardImg"/>
                        </div>
                        <div className="cardImgWrap">
                          <img src="https://tinyurl.com/yyktos3r" className="cardImg"/>
                        </div>
                        <div className="cardImgWrap">
                          <img src="https://tinyurl.com/y4fr59zm" className="cardImg"/>
                        </div>
                        <div className="cardImgWrap">
                          <span>+7</span>
                        </div>
                      </div>
                    </div>
                    <div className="cardExpertRight">
                      <Text type="secondary">3 days ago</Text>
                    </div>
                  </div>
                  <div className="cardAction pt-2">
                    <div className="cardActionLeft">
                      <span className="d-flex flex-row align-items-center justify-content-center mr-4">
                        <HeartOutlined style={{ fontSize: '24px'}}/>
                        <Text className="ml-2">12</Text>
                      </span>
                      <span className="d-flex flex-row align-items-center justify-content-center mr-4">
                        <MessageOutlined  style={{ fontSize: '24px'}}/>
                        <Text className="ml-2">12</Text>
                      </span>
                      <span className="d-flex flex-row align-items-center justify-content-center">
                        <ShareAltOutlined style={{ fontSize: '24px'}}/>
                      </span>
                    </div>
                    <div className="cardActionRight" onClick={showModal}>
                      <img src={bookmark}/>
                    </div>
                  </div>
                </Card>
          </div>
          <div className="col-12 col-lg-4 mb-3 listFeedCard">
              <Card>
                <div className="cardHead">
                  <div className="cardHeadLeft d-flex flex-row align-items-center">
                    <img src={avatar} className="cardImg"/>
                    <div className="d-flex flex-column ml-2">
                      <Text type="primary">Jane Cooper</Text>
                      <Text type="secondary">Musician | Vocalist</Text>
                    </div>
                  </div>
                  <div className="cardHeadRight">
                    <Dropdown overlay={menu} placement="bottomRight">
                      <MoreOutlined style={{ fontSize: '24px'}} />
                    </Dropdown>
                  </div>
                </div>
                <Link to="/ListDetails">
                    <div className="cardBody pt-3">
                      <Text type="primary" strong>The best wireless headphones you can buy in 2020 so far</Text>
                      <div className="cardBodyImgWrap mt-2">
                        <Image
                          width={'100%'}
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                          preview={
                            false
                          }
                        />
                      </div>
                    </div>
                  </Link>
                <div className="cardExpert py-2">
                  <div className="cardExpertLeft">
                    <div className="facepile">
                      <div className="cardImgWrap">
                        <img src="https://tinyurl.com/y44o75ox" className="cardImg"/>
                      </div>
                      <div className="cardImgWrap">
                        <img src="https://tinyurl.com/y6oe9zfe" className="cardImg"/>
                      </div>
                      <div className="cardImgWrap">
                        <img src="https://tinyurl.com/yyktos3r" className="cardImg"/>
                      </div>
                      <div className="cardImgWrap">
                        <img src="https://tinyurl.com/y4fr59zm" className="cardImg"/>
                      </div>
                      <div className="cardImgWrap">
                        <span>+7</span>
                      </div>
                    </div>
                  </div>
                  <div className="cardExpertRight">
                    <Text type="secondary">3 days ago</Text>
                  </div>
                </div>
                <div className="cardAction pt-2">
                  <div className="cardActionLeft">
                    <span className="d-flex flex-row align-items-center justify-content-center mr-4">
                      <HeartOutlined style={{ fontSize: '24px'}}/>
                      <Text className="ml-2">12</Text>
                    </span>
                    <span className="d-flex flex-row align-items-center justify-content-center mr-4">
                      <MessageOutlined  style={{ fontSize: '24px'}}/>
                      <Text className="ml-2">12</Text>
                    </span>
                    <span className="d-flex flex-row align-items-center justify-content-center">
                      <ShareAltOutlined style={{ fontSize: '24px'}}/>
                    </span>
                  </div>
                  <div className="cardActionRight" onClick={showModal}>
                    <img src={bookmark}/>
                  </div>
                </div>
              </Card>
          </div>
          <div className="col-12 col-lg-4 mb-3 listFeedCard">
              <Card>
                  <div className="cardHead">
                    <div className="cardHeadLeft d-flex flex-row align-items-center">
                      <img src={avatar} className="cardImg"/>
                      <div className="d-flex flex-column ml-2">
                        <Text type="primary">Jane Cooper</Text>
                        <Text type="secondary">Musician | Vocalist</Text>
                      </div>
                    </div>
                    <div className="cardHeadRight">
                      <Dropdown overlay={menu} placement="bottomRight">
                        <MoreOutlined style={{ fontSize: '24px'}} />
                      </Dropdown>
                    </div>
                  </div>
                  <Link to="/ListDetails">
                    <div className="cardBody pt-3">
                      <Text type="primary" strong>The best wireless headphones you can buy in 2020 so far</Text>
                      <div className="cardBodyImgWrap mt-2">
                        <Image
                          width={'100%'}
                          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                          preview={
                            false
                          }
                        />
                      </div>
                    </div>
                  </Link>
                  <div className="cardExpert py-2">
                    <div className="cardExpertLeft">
                      <div className="facepile">
                        <div className="cardImgWrap">
                          <img src="https://tinyurl.com/y44o75ox" className="cardImg"/>
                        </div>
                        <div className="cardImgWrap">
                          <img src="https://tinyurl.com/y6oe9zfe" className="cardImg"/>
                        </div>
                        <div className="cardImgWrap">
                          <img src="https://tinyurl.com/yyktos3r" className="cardImg"/>
                        </div>
                        <div className="cardImgWrap">
                          <img src="https://tinyurl.com/y4fr59zm" className="cardImg"/>
                        </div>
                        <div className="cardImgWrap">
                          <span>+7</span>
                        </div>
                      </div>
                    </div>
                    <div className="cardExpertRight">
                      <Text type="secondary">3 days ago</Text>
                    </div>
                  </div>
                  <div className="cardAction pt-2">
                    <div className="cardActionLeft">
                      <span className="d-flex flex-row align-items-center justify-content-center mr-4">
                        <HeartOutlined style={{ fontSize: '24px'}}/>
                        <Text className="ml-2">12</Text>
                      </span>
                      <span className="d-flex flex-row align-items-center justify-content-center mr-4">
                        <MessageOutlined  style={{ fontSize: '24px'}}/>
                        <Text className="ml-2">12</Text>
                      </span>
                      <span className="d-flex flex-row align-items-center justify-content-center">
                        <ShareAltOutlined style={{ fontSize: '24px'}}/>
                      </span>
                    </div>
                    <div className="cardActionRight" onClick={showModal}>
                      <img src={bookmark}/>
                    </div>
                  </div>
                </Card>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 fixedBottom bg-white">
        <Divider className="my-0"/>
          <div className="container navBar">
            <div className="d-flex flex-row py-3">
              <div className="d-flex flex-fill align-items-center justify-content-center">
                <HomeOutlined style={{ fontSize: '24px'}}/>
              </div>
              <div className="d-flex align-items-center flex-fill align-items-center justify-content-center">
                <HeartOutlined style={{ fontSize: '24px'}}/>
              </div>
              <div className="d-flex flex-fill align-items-center justify-content-center">
                <FileAddOutlined style={{ fontSize: '24px'}}/>
              </div>
              <div className="d-flex flex-fill align-items-center justify-content-center">
              <img src={bookmark}/>
              </div>
              <div className="d-flex flex-fill align-items-center justify-content-center">
                <MailOutlined style={{ fontSize: '24px'}}/>
              </div>
            </div>
          </div>
      </div>
      <Modal title="Add to list" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <div className="mb-2">
            <b>Sort by</b>
          </div>
          <Select defaultValue="option1" className="w-100">
            <Option value="option1">option1</Option>
            <Option value="option2">option2</Option>
            <Option value="option3">option3</Option>
          </Select>
        </div>
        <div className="mt-4">
          <Text type="secondary">Or select a existing list</Text>
          <div className="mt-2">
            <Checkbox.Group>
              <Checkbox className="checkboxGroupItem ml-0">
                Option A
              </Checkbox>
              <Checkbox className="checkboxGroupItem ml-0">
                Option B
              </Checkbox>
              <Checkbox className="checkboxGroupItem ml-0">
                Option C
              </Checkbox>
            </Checkbox.Group>
          </div>
        </div>
      </Modal>
    </div>
  );
}

const ListDetails = () =>{
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
              <h2 className="my-0">Rankly</h2>
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="mr-4"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container listDetails pt-4 pb-5">
        <div className="row">
          <div className="col-12">
            <div className="detailsHead">
              <div className="detailsHeadLeft d-flex flex-row">
                <div className="detailsHeadImgWrap flex-shrink-0">
                  <img src={avatar} className="cardImg" />
                </div>
                <div className="d-flex flex-column ml-2">
                  <Title level={4} className="mb-0">The best wireless headphones you can buy in 2020 so far</Title>
                  <span className="d-flex flex-row">
                    <Text type="link" className="mr-3">Jane Cooper</Text>
                    <Text type="secondary">Expert Musician | Vocalist</Text>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-row d-md-none d-lg-none d-xl-none mt-4 justify-content-between align-items-center">
              <Button icon={<FilterOutlined />}>Sort & Filter</Button>
              <div className="d-flex flex-row">
                <Radio.Group>
                  <Radio.Button value="large"><AppstoreOutlined /></Radio.Button>
                  <Radio.Button value="default"><UnorderedListOutlined /></Radio.Button>
                </Radio.Group>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-md-7 mt-4">
            <Card className="detailsPrimaryCard">
              <div className="d-flex flex-row justify-content-between">
                <Title level={5}>#1. Sony WH-1000XM4</Title>
                <MoreOutlined style={{ fontSize: '24px'}} />
              </div>
              <div className="cardBody">
                <div className="cardBodyImgWrap mt-2">
                  <Image
                  width={'100%'}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  preview={
                    false
                  }
                  />
                </div>
              </div>
              <div className="cardExpert py-2">
                <div className="cardExpertLeft">
                  <div className="facepile">
                    <div className="cardImgWrap">
                      <img src="https://tinyurl.com/y44o75ox" className="cardImg"/>
                    </div>
                    <div className="cardImgWrap">
                      <img src="https://tinyurl.com/y6oe9zfe" className="cardImg"/>
                    </div>
                    <div className="cardImgWrap">
                      <img src="https://tinyurl.com/yyktos3r" className="cardImg"/>
                    </div>
                    <div className="cardImgWrap">
                      <img src="https://tinyurl.com/y4fr59zm" className="cardImg"/>
                    </div>
                    <div className="cardImgWrap">
                      <span>+7</span>
                    </div>
                  </div>
                </div>
                <div className="cardExpertRight">
                  <Button>Order Now</Button>
                </div>
              </div>
              <div className="cardAction pt-2">
              <div className="cardActionRight">
                  <div className="d-flex flex-row align-items-center">
                    <Button type="primary" icon={<UpOutlined />} />
                    <span className="px-3">
                      <Text type="primary">#</Text>
                    </span>
                    <Button type="primary" icon={<DownOutlined />} />
                  </div>
                </div>
                <div className="cardActionLeft">
                  <span className="d-flex flex-row align-items-center justify-content-center mr-3">
                    <HeartOutlined style={{ fontSize: '24px'}}/>
                    <Text className="ml-2">12</Text>
                  </span>
                  <span className="d-flex flex-row align-items-center justify-content-center mr-3">
                    <MessageOutlined  style={{ fontSize: '24px'}}/>
                    <Text className="ml-2">12</Text>
                  </span>
                  <span className="d-flex flex-row align-items-center justify-content-center mr-3">
                    <ShareAltOutlined style={{ fontSize: '24px'}}/>
                  </span>
                  <span className="d-flex flex-row align-items-center justify-content-center" onClick={showModal}>
                    <img src={bookmark}/>
                  </span>
                </div>
                
              </div>
            </Card>
          </div>
          <div className="d-none d-sm-none d-md-block col-lg-5 col-md-5 mt-4">
            <div className="d-flex flex-row detailsSecondaryCard bg-light px-2 py-2 mb-2">
              <div className="cardBodyImgWrap">
                <Image
                width={'100%'}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                preview={
                  false
                }
                />
              </div>
              <div className="d-flex flex-column ml-2">
                <Text type="primary" strong>#2</Text>
                <Text type="primary">Sony WH-1000XM4</Text>
              </div>
              
            </div>
            <div className="d-flex flex-row detailsSecondaryCard bg-light px-2 py-2 mb-2">
              <div className="cardBodyImgWrap">
                <Image
                width={'100%'}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                preview={
                  false
                }
                />
              </div>
              <div className="d-flex flex-column ml-2">
                <Text type="primary" strong>#3</Text>
                <Text type="primary">Sony WH-1000XM4</Text>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 fixedBottom bg-white">
        <Divider className="my-0"/>
          <div className="container navBar">
            <div className="d-flex flex-row py-3">
              <div className="d-flex flex-fill align-items-center justify-content-center">
                <HomeOutlined style={{ fontSize: '24px'}}/>
              </div>
              <div className="d-flex align-items-center flex-fill align-items-center justify-content-center">
                <HeartOutlined style={{ fontSize: '24px'}}/>
              </div>
              <div className="d-flex flex-fill align-items-center justify-content-center">
                <FileAddOutlined style={{ fontSize: '24px'}}/>
              </div>
              <div className="d-flex flex-fill align-items-center justify-content-center">
              <img src={bookmark}/>
              </div>
              <div className="d-flex flex-fill align-items-center justify-content-center">
                <MailOutlined style={{ fontSize: '24px'}}/>
              </div>
            </div>
          </div>
      </div>
      <Modal title="Add to list" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <div className="mb-2">
            <b>Sort by</b>
          </div>
          <Select defaultValue="option1" className="w-100">
            <Option value="option1">option1</Option>
            <Option value="option2">option2</Option>
            <Option value="option3">option3</Option>
          </Select>
        </div>
        <div className="mt-4">
          <Text type="secondary">Or select a existing list</Text>
          <div className="mt-2">
            <Checkbox.Group>
              <Checkbox className="checkboxGroupItem ml-0">
                Option A
              </Checkbox>
              <Checkbox className="checkboxGroupItem ml-0">
                Option B
              </Checkbox>
              <Checkbox className="checkboxGroupItem ml-0">
                Option C
              </Checkbox>
            </Checkbox.Group>
          </div>
        </div>
      </Modal>
    </div>
  );
}

function FilterList(){
  return(
    <div>
       <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="row py-3">
            <div className="col-6">
              <Button className="w-100">Reset</Button>
            </div>
            <div className="col-6">
              <Button type="primary" className="w-100">Done</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container listDetails pt-4 pb-5">
        <div className="row">

          <div className="col-12 mb-3">
            <div className="mb-2">
              <b>Sort by</b>
            </div>
            <Select defaultValue="option1" className="w-100">
              <Option value="option1">option1</Option>
              <Option value="option2">option2</Option>
              <Option value="option3">option3</Option>
            </Select>
          </div>

          <div className="col-12">
            <div className="mb-2">
              <b>Wireless type</b>
            </div>
            <Checkbox.Group>
              <Checkbox className="checkboxGroupItem ml-0">
                Option A
              </Checkbox>
              <Checkbox className="checkboxGroupItem ml-0">
                Option B
              </Checkbox>
              <Checkbox className="checkboxGroupItem ml-0">
                Option C
              </Checkbox>
            </Checkbox.Group>
          </div>


        </div>
      </div>
    </div>
  );
}

function FavouriteList(){
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
              <h2 className="my-0">Rankly</h2>
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="mr-4"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>

      <div className="container favouriteList">
        <div className="row">
          <div className="col-12 px-0">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Lists" key="1">
              <div className="col-12 px-0">
                <div className="d-flex flex-row detailsSecondaryCard mb-2 px-3 py-2">
                  <div className="cardBodyImgWrap flex-shrink-0">
                    <Image
                    width={'100%'}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  </div>
                  <div className="d-flex flex-column ml-2">
                    <Text type="primary" strong>The best wireless headphones you can buy in 2020</Text>
                    <span className="d-flex flex-row">
                      <Text type="secondary" className="mr-3">Jane Cooper</Text>
                      <Text type="secondary">8 month ago</Text>
                    </span>
                  </div>
                </div>
                <Divider className="my-0"/>
              </div>
            </TabPane>
            <TabPane tab="Items" key="2">
              <div className="col-12 px-0">
                <div className="d-flex flex-row detailsSecondaryCard mb-2 px-3 py-2">
                  <div className="cardBodyImgWrap flex-shrink-0">
                    <Image
                    width={'100%'}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  </div>
                  <div className="d-flex flex-column ml-2">
                    <Text type="primary" strong>Sony WH-1000XM4</Text>
                    <Link>The best wireless headphones you can buy in 2020</Link>
                    <span className="d-flex flex-row">
                      <Text type="secondary" className="mr-3">Jane Cooper</Text>
                      <Text type="secondary">8 month ago</Text>
                    </span>
                  </div>
                </div>
                <Divider className="my-0"/>
              </div>
            </TabPane>
          </Tabs>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0 fixedBottom bg-white">
        <Divider className="my-0"/>
          <div className="container navBar">
            <div className="d-flex flex-row py-3">
              <div className="d-flex flex-fill align-items-center justify-content-center">
                <HomeOutlined style={{ fontSize: '24px'}}/>
              </div>
              <div className="d-flex align-items-center flex-fill align-items-center justify-content-center">
                <HeartOutlined style={{ fontSize: '24px'}}/>
              </div>
              <div className="d-flex flex-fill align-items-center justify-content-center">
                <FileAddOutlined style={{ fontSize: '24px'}}/>
              </div>
              <div className="d-flex flex-fill align-items-center justify-content-center">
              <img src={bookmark}/>
              </div>
              <div className="d-flex flex-fill align-items-center justify-content-center">
                <MailOutlined style={{ fontSize: '24px'}}/>
              </div>
            </div>
          </div>
      </div>

    </div>
  );
}

function BookmarkList(){
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
              <h2 className="my-0">Rankly</h2>
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="mr-4"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="d-flex flex-column py-1 bookmarkList">
        <Divider className="my-0"></Divider>
        <div className="container">
          <div className="py-2 d-flex flex-column">
            <Text type="primary">Christmas gifts</Text>
            <Text type="secondary">4 Listings  8 month ago</Text>
          </div>
        </div>
        <Divider className="my-0"></Divider>
      </div>
      <div className="container-fluid px-0 fixedBottom bg-white">
        <Divider className="my-0"/>
          <div className="container navBar">
            <div className="d-flex flex-row py-3">
              <div className="d-flex flex-fill align-items-center justify-content-center">
                <HomeOutlined style={{ fontSize: '24px'}}/>
              </div>
              <div className="d-flex align-items-center flex-fill align-items-center justify-content-center">
                <HeartOutlined style={{ fontSize: '24px'}}/>
              </div>
              <div className="d-flex flex-fill align-items-center justify-content-center">
                <FileAddOutlined style={{ fontSize: '24px'}}/>
              </div>
              <div className="d-flex flex-fill align-items-center justify-content-center">
              <img src={bookmark}/>
              </div>
              <div className="d-flex flex-fill align-items-center justify-content-center">
                <MailOutlined style={{ fontSize: '24px'}}/>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

function BookmarkDetails() {
  return(
    <div>

    </div>
  )
}