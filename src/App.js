import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './utility.less';
import './App.less';
import { Tooltip,Alert,Badge,Tag,Affix,Breadcrumb,Button,Divider,Form,Input,Select,Upload,message,Card,Typography,Dropdown,Menu,Image,Radio,Checkbox,Tabs,Modal } from 'antd';
import { ExclamationCircleFilled,DollarOutlined,RiseOutlined,CaretDownOutlined,CaretUpOutlined,CopyOutlined,SendOutlined,DeleteOutlined,CheckOutlined,UploadOutlined,ArrowLeftOutlined,EditOutlined,ArrowRightOutlined,CloseOutlined,LogoutOutlined,QuestionCircleOutlined,SafetyOutlined,LockOutlined,ToolOutlined,PlusOutlined,MoreOutlined,HeartOutlined,MessageOutlined,ShareAltOutlined,SearchOutlined,BellOutlined,HomeOutlined,FileAddOutlined,MailOutlined,UpOutlined,DownOutlined,AppstoreOutlined,UnorderedListOutlined,FilterOutlined,HeartFilled } from '@ant-design/icons';
import logo from './assets/img/logo.png';
import avatar from './assets/img/avatar.png';
import ad1 from './assets/img/ad-1.png';
import bookmark from './assets/img/bookmark.svg';
import move from './assets/img/move.svg';
import facebook from './assets/img/facebook.svg';
import google from './assets/img/google.svg';
import users from "./users-data";

const { TextArea } = Input;
const { Search } = Input;
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

export default function BasicExample() {
  return (
  <Router>
    <Switch>
      <Route path="/monetizationPayment">
        <MonetizationPayment/>
      </Route>
      <Route path="/monetizationDetails">
        <MonetizationDetails/>
      </Route>
      <Route path="/monetization">
        <Monetization />
      </Route>
      <Route path="/squadpagedetails">
        <SquadPageDetails />
      </Route>
      <Route path="/squadpage">
        <SquadPage />
      </Route>
      <Route path="/messagebody">
        <MessageBody />
      </Route>
      <Route path="/squadrequest">
        <SquadRequest />
      </Route>
      <Route path="/notifications">
        <Notifications />
      </Route>
      <Route path="/listcreated">
        <ListCreated />
      </Route>
      <Route path="/createlistitem">
        <CreateListItem />
      </Route>
      <Route path="/listinitial">
        <ListInitial />
      </Route>
      <Route path="/createlist">
        <CreateList />
      </Route>
      <Route path="/searchresults">
        <SearchResults />
      </Route>
      <Route path="/bookmarkdetails">
        <BookmarkDetails />
      </Route>
      <Route path="/mymessages">
        <MyMessages />
      </Route>
      <Route path="/accountsettings">
        <AccountSettings />
      </Route>
      <Route path="/myfollowings">
        <MyFollowings />
      </Route>
      <Route path="/mycomments">
        <MyComments />
      </Route>
      <Route path="/myprofile">
        <MyProfile />
      </Route>
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

function MonetizationPayment() {
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar py-2">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <ArrowLeftOutlined style={{ fontSize: '24px'}}/>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container monetizationPage">
        <div className="row">
          <div className="col-12 px-0">
            <div className="px-3 px-sm-0 py-3">
              <Title level={5} className="mb-0">Payment Method <Tooltip title="prompt text" placement="bottom" ><QuestionCircleOutlined /></Tooltip></Title>
            </div>
            <div className="col-12 px-3 px-sm-0 inputLG border-x-0">
                <Select defaultValue="Select Payment Method" style={{ width: '100%'}} className="border-left-0 border-right-0">
                  <Option value="jack">Paypal</Option>
                  <Option value="lucy">Stripe</Option>
                </Select>
            </div>
            <div className="col-12 mt-4 px-3 px-sm-0">
              <Button type="primary" className="w-100">Apply</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MonetizationDetails() {
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar py-2">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <ArrowLeftOutlined style={{ fontSize: '24px'}}/>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>

      <div className="container createListItem">
        <div className="row">
          <div className="col-12 px-0 createListItemWrap d-flex flex-column">
            <div>
              <div className="col-12 px-0">
                <Input placeholder="First name" className="border-left-0  border-right-0 border-top-0 lineInput" style={{borderRadius:'0px', height:'48px'}}/>
              </div>
              <div className="col-12 px-0">
                <Input placeholder="Last name" className="border-left-0  border-right-0 border-top-0 lineInput" style={{borderRadius:'0px', height:'48px'}}/>
              </div>
              <div className="col-12 px-0 inputLG border-x-0">
                <Select defaultValue="Select Country" style={{ width: '100%', height:'48px' }} className="border-left-0 border-right-0">
                  <Option value="jack">United States of America </Option>
                  <Option value="lucy">United Kingdom</Option>
                </Select>
              </div>
              <div className="col-12 px-0">
                <Input placeholder="Address" className="border-left-0  border-right-0 border-top-0 lineInput" style={{borderRadius:'0px', height:'48px'}}/>
              </div>
              <div className="col-12 px-0">
                <Input placeholder="City" className="border-left-0  border-right-0 border-top-0 lineInput" style={{borderRadius:'0px', height:'48px'}}/>
              </div>
              <div className="col-12 px-0">
                <Input placeholder="State / Province" className="border-left-0  border-right-0 border-top-0 lineInput" style={{borderRadius:'0px', height:'48px'}}/>
              </div>
              <div className="col-12 px-0">
                <Input placeholder="Postal / ZIP" className="border-left-0  border-right-0 border-top-0 lineInput" style={{borderRadius:'0px', height:'48px'}}/>
              </div>
              <div className="col-12 px-0 inputLG border-x-0">
                <Select defaultValue="Select document type" style={{ width: '100%', height:'48px' }} className="border-left-0 border-right-0">
                  <Option value="jack">United States of America </Option>
                  <Option value="lucy">United Kingdom</Option>
                </Select>
              </div>
              <div className="col-12 px-3 px-sm-0">
                <div className="mb-2 mt-3">
                  <b>Photo of your ID</b>
                </div>
                <div>
                  <Upload>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </div>
                <div>
                  <Text type="secondary">
                  Please upload a photo of your ID document (i.e Passport or Drviving License)
                  </Text>
                </div>
              </div>
              <div className="col-12 px-3 px-sm-0">
                <div className="mb-2 mt-3">
                  <b>Photo of Holding your ID</b>
                </div>
                <div>
                  <Upload>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                  </Upload>
                </div>
                <div>
                  <Text type="secondary">
                  Please upload a photo of your ID document (i.e Passport or Drviving License)
                  </Text>
                </div>
              </div>
              <div className="col-12 mt-3 px-3 px-sm-0">
                <Checkbox className="checkboxGroupItem ml-0">
                Agree to Rank.ly partner program terms of service
                </Checkbox>
              </div>
              <div className="col-12 mt-4 px-3 px-sm-0">
                <Button type="primary" className="w-100">Apply</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Monetization() {
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container monetizationPage">
        <div className="row">
          <div className="col-12 px-0">
            <div class="px-3 py-3">
              <Alert
                message="Monetization Eligibility"
                description="You need to have 10 squad members and 50 favorites inorder to become eligible for Rank.ly monetization programe."
                type="warning"
              />
            </div>
            <div className="px-3 pb-3">
              <Title level={5} className="mb-0">Eligibility Criteria</Title>
            </div>
            <div className="px-3">
              <div className="d-flex flex-row py-3 justify-content-between">
                <div className="d-flex flex-column">
                  <Text>10 squad members</Text>
                  <Text type="secondary">you have 5 members currently</Text>
                </div>
                <div>
                <Text type="warning">
                  <ExclamationCircleFilled/>
                </Text>
                </div>
              </div>
              <Divider className="my-0"/>
            </div>
            <div className="px-3">
              <div className="d-flex flex-row py-3 justify-content-between">
                <div className="d-flex flex-column">
                  <Text>50 favorites</Text>
                  <Text type="secondary">you have 23 favorites currently</Text>
                </div>
                <div>
                <Text type="warning">
                  <ExclamationCircleFilled/>
                </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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

function Signup() {
  return (
    <div>
      <div className="container-fluid px-0">
          <div className="container navBar">
            <div className="d-flex flex-row py-2 align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <img src={logo} className="Applogo mr-3" alt="logo" />
              </div>
            </div>
          </div>
        <Divider className="my-0"/>
      </div>
      <div className="container d-flex flex-column signupContainer">
          <div className="row h-100">
            <div className="d-none d-sm-none d-md-flex col-md-6 col-lg-6 h-100 overflow-hidden align-items-center justify-content-center position-relative">
              <Image
                preview={false}
                width={'100%'}
                src="https://tinyurl.com/y6jtp4qn"
              />
              {/* <div style={{ width:'100%', height:'100%', backgroundColor:'#000',position:'absolute',top:'0px',left:'0px',opacity:'0.5'}}></div> */}
            </div>
            <div className="col-md-6 col-lg-6 h-100">
              <div className="d-flex flex-column justify-content-center h-100">
              <div className="px-0">
                <h2>Signup</h2>
                <p>By continuing, you agree to our <Link to="">User Agrement</Link> and <Link to="">Privacy Policy</Link>.</p>
              </div>
              <div className="mt-4 px-0">
                <Button className="d-flex flex-row align-items-center w-100 mb-2">
                  <span className="mr-3"><img src={google} style={{ width: '18px'}}/></span>
                  <span>CONTINUE WITH GOOGLE</span>
                </Button>
                <Button className="d-flex flex-row align-items-center w-100">
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
                <p>Already have an account?<Link className="ml-2">Login</Link>.</p>
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
              </div>
            </div>
          </div>
        <Divider className="my-0"/>
      </div>
      <div className="container d-flex flex-column justify-content-center signupContainer">
          <div className="row h-100">
            <div className="d-none d-sm-none d-md-flex col-md-6 col-lg-6 h-100 overflow-hidden align-items-center justify-content-center">
                <Image
                  preview={false}
                  width={'100%'}
                  src="https://tinyurl.com/y6jtp4qn"
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
              </div>
            </div>
          </div>
        <Divider className="my-0"/>
      </div>
      <div className="container d-flex flex-column justify-content-center signupContainer">
        <div className="row h-100">
        <div className="d-none d-sm-none d-md-flex col-md-6 col-lg-6 h-100 overflow-hidden align-items-center justify-content-center">
        <Image
        preview={false}
        width={'100%'}
        src="https://tinyurl.com/y6jtp4qn"
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
                  <b>Username we picked for you</b>
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
              </div>
            </div>
          </div>
        <Divider className="my-0"/>
      </div>
      <div className="container d-flex flex-column signupContainer">
          <div className="row h-100">
            <div className="d-none d-sm-none d-md-flex col-md-6 col-lg-6 h-100 overflow-hidden align-items-center justify-content-center">
              <Image
                preview={false}
                width={'100%'}
                src="https://tinyurl.com/y6jtp4qn"
              />
            </div>
            <div className="col-md-6 col-lg-6 h-100">
              <div className="d-flex flex-column justify-content-center h-100">
              <div className="px-0">
                <h2>Login</h2>
                <p>By continuing, you agree to our <Link to="">User Agrement</Link> and <Link to="">Privacy Policy</Link>.</p>
              </div>
              <div className="mt-4 px-0">
                <Button className="d-flex flex-row align-items-center w-100 mb-2">
                  <span className="mr-3"><img src={google} style={{ width: '18px'}}/></span>
                  <span>CONTINUE WITH GOOGLE</span>
                </Button>
                <Button className="d-flex flex-row align-items-center w-100">
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
                <p>Already have an account?<Link className="ml-2">Signup</Link>.</p>
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
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [isModalVisible3, setIsModalVisible3] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  const showModal3 = () => {
    setIsModalVisible3(true);
  };

  const handleOk3 = () => {
    setIsModalVisible3(false);
  };

  const handleCancel3 = () => {
    setIsModalVisible3(false);
  };

  const menu = (
    <Menu>
      <Menu.Item onClick={showModal2}>
          Report
      </Menu.Item>
    </Menu>
  );

  const [open, setOpen] = React.useState(false);

  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container listFeed pt-3">
        <div className="row">
          <div className="d-none"></div>
          <div className="col-12 col-lg-8">
            {users.map((user, index) => (
              <div key={index} className="col-12 px-0 listFeedCard mb-3">
                <Card>
                  <div className="cardHead d-flex flex-row align-items-center justify-content-between">
                    <div className="cardHeadLeft d-flex flex-row align-items-center">
                      <div className="avatarWrap" style={{ width:'40px', height:'40px', overflow:'hidden', borderRadius:'50%'}}>
                        <img src={user.avatarImg} className="cardImg w-100 h-auto"/>
                      </div>
                      <div className="d-flex flex-column ml-2">
                        <Text type="primary">{user.name}</Text>
                        <Text type="secondary">{user.bio}</Text>
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
                        <Text type="primary" strong className="title">{user.title}</Text>
                        <div className="cardBodyImgWrap mt-2">
                          <Image
                            width={'100%'}
                            src={user.imgURL}
                            preview={
                              false
                            }
                          />
                        </div>
                      </div>
                    </Link>
                  <div className="cardExpert d-flex flex-row align-items-center justify-content-between py-2">
                    <div className="cardExpertLeft">
                      <div className="facepile d-flex flex-row">
                        <div className="cardImgWrap rounded-circle">
                          <img src="https://tinyurl.com/y44o75ox" className="cardImg w-100 h-auto"/>
                        </div>
                        <div className="cardImgWrap">
                          <img src="https://tinyurl.com/y6oe9zfe" className="cardImg w-100 h-auto"/>
                        </div>
                        <div className="cardImgWrap">
                          <img src="https://tinyurl.com/yyktos3r" className="cardImg w-100 h-auto"/>
                        </div>
                        <div className="cardImgWrap">
                          <img src="https://tinyurl.com/y4fr59zm" className="cardImg w-100 h-auto"/>
                        </div>
                        <div className="cardImgWrap d-flex align-items-center justify-content-center">
                          <span>+7</span>
                        </div>
                      </div>
                    </div>
                    <div className="cardExpertRight">
                      <Text type="secondary">3 days ago</Text>
                    </div>
                  </div>
                  <div className="cardAction d-flex flex-row align-items-center justify-content-between pt-2">
                    <div className="cardActionLeft d-flex flex-row">
                      <span className="d-flex flex-row align-items-center justify-content-center mr-4">
                        <HeartOutlined style={{ fontSize: '24px'}}/>
                        <Text className="ml-2">12</Text>
                      </span>   
                      <span className="d-flex flex-row align-items-center justify-content-center mr-4">
                        <MessageOutlined  style={{ fontSize: '24px'}} onClick={() => { setOpen(!open);}}/>
                        <Text className="ml-2">12</Text>
                      </span>
                      <span className="d-flex flex-row align-items-center justify-content-center">
                        <ShareAltOutlined style={{ fontSize: '24px'}} onClick={showModal3}/>
                      </span>
                    </div>
                    <div className="cardActionRight" onClick={showModal} style={{cursor: 'pointer'}}>
                      <img src={bookmark}/>
                    </div>
                  </div>
                  <div style={{ display: open ? "block" : "none" }}>
                    <div className="d-flex mt-3">
                      <TextArea
                        placeholder="Write a comment"
                        autoSize={{ minRows: 1, maxRows: 4 }}
                      />
                    </div>
                    <div className="d-flex flex-row mt-2">
                      <div className="d-flex flex-column">
                        <CaretUpOutlined />
                        <Text type="secondary">44</Text>
                        <CaretDownOutlined />
                      </div>
                      <div className="d-flex flex-column pl-3">
                        <div className="d-flex flex-row">
                          <Text style={{fontSize:"12px"}} strong>Jane Doe</Text><Text style={{fontSize:"12px"}} className="ml-2" type="secondary">1 hour ago</Text>
                        </div>
                        <div>
                          <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacus sapien, volutpat non diam ut, interdum tincidunt purus.
                          </Text>
                        </div>
                        <div>
                          <Link style={{fontSize:"12px"}}>
                            1 Reply
                          </Link>
                        </div>
                        <div className="d-flex flex-row mt-2">
                          <div className="d-flex flex-column">
                            <CaretUpOutlined />
                            <Text type="secondary">44</Text>
                            <CaretDownOutlined />
                          </div>
                          <div className="d-flex flex-column pl-3">
                            <div className="d-flex flex-row">
                              <Text style={{fontSize:"12px"}} strong>Jane Doe</Text><Text style={{fontSize:"12px"}} className="ml-2" type="secondary">1 hour ago</Text>
                            </div>
                            <div>
                              <Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacus sapien, volutpat non diam ut, interdum tincidunt purus.
                              </Text>
                            </div>
                            <div>
                              <Link style={{fontSize:"12px"}}>
                                2 Replies
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex mt-3">
                          <TextArea
                            value="@JaneDoe"
                            placeholder="Write a comment"
                            autoSize={{ minRows: 1, maxRows: 4 }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
            </div>
            ))}
          </div>
          <div className="d-none d-lg-block col-lg-4  sideMenuLg">
            <img src={ad1} className="mb-3 w-100 h-auto"/>
            {users.map((user, index) => (
                <div key={index} className="col-12 px-0 listFeedCard mb-3">
                  <Card>
                    <Link to="/ListDetails">
                      <div className="cardBody">
                        <Text type="primary" className="title" style={{fontSize:'14px'}}>{user.title}</Text>
                      </div>
                    </Link>
                    <div className="cardHead">
                      <div className="cardHeadLeft d-flex flex-row align-items-center">
                        <div className="d-flex flex-column">
                          <Text type="secondary">{user.name}</Text>
                        </div>
                      </div>
                    </div>
                    <div className="cardExpert py-2">
                      <div className="cardExpertLeft">
                        <div className="facepile d-flex flex-row">
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
                          <div className="cardImgWrap d-flex align-items-center justify-content-center">
                            <span>+7</span>
                          </div>
                        </div>
                      </div>
                      <div className="cardExpertRight">
                        <Text type="secondary">3 days ago</Text>
                      </div>
                    </div>
                  </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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
      <Modal 
        title="Add to list" 
        visible={isModalVisible} 
        onOk={handleOk} 
        onCancel={handleCancel}
      >
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
      <Modal 
        title="Report" 
        visible={isModalVisible2}
        onOk={handleOk2} 
        onCancel={handleCancel2}
        footer={[
          <Button key="back" onClick={handleCancel2}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk2}>
            Report
          </Button>,
        ]}
      >
        <div className="mt-2">
          <Checkbox.Group>
            <Checkbox className="checkboxGroupItem ml-0">
              Suggestive, Unsettling, Contains Mature Themes
            </Checkbox>
            <Checkbox className="checkboxGroupItem ml-0">
              Nudity, Sexual Activity, Non-Consensual Sexualization
            </Checkbox>
            <Checkbox className="checkboxGroupItem ml-0">
              Spam, Fake News, Scams, Fraud
            </Checkbox>
            <Checkbox className="checkboxGroupItem ml-0">
              Discrimination, Hateful Ideology, Illegal Content, Gore
            </Checkbox>
            <Checkbox className="checkboxGroupItem ml-0">
              Harassment, Self-Harm, Personal Information
            </Checkbox>
          </Checkbox.Group>
        </div>
      </Modal>
      <Modal 
        title="Share" 
        visible={isModalVisible3} 
        onOk={handleOk3} 
        onCancel={handleCancel3}
      >
        <div className="mb-3">
          <div className="mb-2">
            <b>Share with people and squads</b>
          </div>
          <Search placeholder="input search text" enterButton />
        </div>
        <div className="mb-2">
            <b>Share URL</b>
          </div>
        <div className="mb-3 d-flex flex-row">
            <Input placeholder="input search text" className="rounded-top-right-0 rounded-bottom-right-0"/>
            <Button type="primary" className="rounded-0"><CopyOutlined /></Button>
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

  const [top, setTop] = useState(68);
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container listDetails pt-4">
        <div className="row">
          <div className="col-12">
            <div className="detailsHead">
              <div className="detailsHeadLeft d-flex flex-row">
                <div className="detailsHeadImgWrap flex-shrink-0">
                  <img src={avatar} className="cardImg" style={{width:'100%', height:'auto'}}/>
                </div>
                <div className="d-flex flex-column ml-2">
                  <Title level={4} className="mb-0">The best wireless headphones you can buy in 2020 so far</Title>
                  <span className="d-flex flex-row flex-wrap">
                    <Text type="link" className="mr-3 flex-shrink-0">Jane Cooper</Text>
                    <Text type="secondary" className="flex-shrink-0">Expert Musician | Vocalist</Text>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="d-flex flex-row d-md-none d-lg-none d-xl-none mt-4 justify-content-between align-items-center">
              <Text className="mb-0" type="secondary">Published 3:10 PM EST, Thu </Text>
              <div className="d-flex flex-row">
                <Button icon={<FilterOutlined />} className="mr-2">Sort & Filter</Button>
                <Radio.Group>
                  <Radio.Button value="large"><AppstoreOutlined /></Radio.Button>
                  <Radio.Button value="default"><UnorderedListOutlined /></Radio.Button>
                </Radio.Group>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 col-md-12 mt-4">
            <Card className="detailsPrimaryCard border-0">
              <div className="d-flex flex-row justify-content-between">
                <Title level={5}>#1. Sony WH-1000XM4</Title>
                <MoreOutlined style={{ fontSize: '24px'}} />
              </div>
              <div className="cardBody px-0 py-0">
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
              <div className="d-flex flex-row align-items-center justify-content-between py-2">
              <Button type="dashed" block>$300</Button>
              </div>
              <div className="cardExpert d-flex flex-row align-items-center justify-content-between py-2">
                <div className="cardExpertLeft">
                  <div className="facepile d-flex flex-row">
                    <div className="cardImgWrap d-flex align-items-center justify-content-center">
                      <img src="https://tinyurl.com/y44o75ox" className="cardImg"/>
                    </div>
                    <div className="cardImgWrap">
                      <img src="https://tinyurl.com/y6oe9zfe" className="cardImg" style={{width:'100%', height:'auto'}}/>
                    </div>
                    <div className="cardImgWrap">
                      <img src="https://tinyurl.com/yyktos3r" className="cardImg" style={{width:'100%', height:'auto'}}/>
                    </div>
                    <div className="cardImgWrap">
                      <img src="https://tinyurl.com/y4fr59zm" className="cardImg" style={{width:'100%', height:'auto'}}/>
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
              <div className="cardAction flex-wrap d-flex flex-row align-items-center justify-content-between">
                <div className="cardActionRight pt-2">
                  <div className="d-flex flex-row align-items-center cardActionRightInner">
                    <Button type="primary" icon={<UpOutlined />} />
                    <span className="px-3">
                      <Text type="primary">#</Text>
                    </span>
                    <Button type="primary" icon={<DownOutlined />} />
                  </div>
                </div>
                <div className="cardActionLeft pt-2 d-flex flex-row">
                  <span className="d-flex flex-row align-items-center justify-content-center mr-3" style={{cursor:'pointer'}}>
                    <HeartOutlined style={{ fontSize: '24px'}}/>
                    <Text className="ml-2">12</Text>
                  </span>
                  <span className="d-flex flex-row align-items-center justify-content-center mr-3" style={{cursor:'pointer'}}>
                    <MessageOutlined  style={{ fontSize: '24px'}}/>
                    <Text className="ml-2">12</Text>
                  </span>
                  <span className="d-flex flex-row align-items-center justify-content-center mr-3" style={{cursor:'pointer'}}>
                    <ShareAltOutlined style={{ fontSize: '24px'}}/>
                  </span>
                  <span className="d-flex flex-row align-items-center justify-content-center" onClick={showModal} style={{cursor:'pointer'}}>
                    <img src={bookmark}/>
                  </span>
                </div>
              </div>
            </Card>
            <div className="listItemDetails py-3">
              <Text>
                The Sony WH-1000XM4 deliver excellent noise-cancellation and surprising sound quality
                While they don't look significantly different from their predecessors, the Sony WH-1000XM3, a number of new features including multipoint pairing, DSEE Extreme upscaling, conversational awareness and auto-play/pause using a built-in sensor all help the WH-1000XM4 claim the title of best headphones in 2020.
              </Text>
              <ul>
                <li>Closed acoustic design </li>
                <li>8.95 oz weight</li>
                <li>3.94 ft cable length</li>
                <li>4hz 40khz frequency responce</li>
                <li>1.57-inch Drivers</li>
                <li>Dome-type driver</li>
              </ul>
              <Text>
                The Sony WH-1000XM4 deliver excellent noise-cancellation and surprising sound quality
                While they don't look significantly different from their predecessors, the Sony WH-1000XM3, a number of new features including multipoint pairing, DSEE Extreme upscaling, conversational awareness and auto-play/pause using a built-in sensor all help the WH-1000XM4 claim the title of best headphones in 2020.
              </Text>
            </div>
          </div>
          <div className="d-none d-sm-none d-md-none d-lg-block col-lg-5 col-md-5 mt-4">
            <Affix offsetTop={top}>
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
                <Text type="primary" strong>#1</Text>
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
            </Affix>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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
              <Option value="option1">Price Lowest </Option>
              <Option value="option2">Price Highest </Option>
              <Option value="option3">Newest</Option>
            </Select>
          </div>
          <div className="col-12 mb-2">
            <div className="mb-2">
              <b>Wireless type</b>
            </div>
            <Checkbox.Group>
              <Checkbox className="checkboxGroupItem ml-0">
                Bluetooth
              </Checkbox>
              <Checkbox className="checkboxGroupItem ml-0">
                RF
              </Checkbox>
              <Checkbox className="checkboxGroupItem ml-0">
                Infared
              </Checkbox>
              <Checkbox className="checkboxGroupItem ml-0">
                NFC
              </Checkbox>
              <Checkbox className="checkboxGroupItem ml-0">
                KLEER
              </Checkbox>
            </Checkbox.Group>
          </div>
          <div className="col-12 mb-2">
            <div className="mb-2">
              <b>Earcup style</b>
            </div>
            <Checkbox.Group>
              <Checkbox className="checkboxGroupItem ml-0">
                Open-back
              </Checkbox>
              <Checkbox className="checkboxGroupItem ml-0">
                Semi open back
              </Checkbox>
              <Checkbox className="checkboxGroupItem ml-0">
                Closed-back
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
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
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
                    src="https://tinyurl.com/yxetcq2h"
                    />
                    <div className="favOverlay">
                          <HeartFilled style={{fontSize:"24px",}}/>
                        </div>
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
                    src="https://tinyurl.com/y2wmfu6p"
                    />
                    <div className="favOverlay">
                      <HeartFilled style={{fontSize:"24px",}}/>
                    </div>
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
      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>

      <div className="container bookmarkList">
        <div className="row">
          <div className="col-12 px-0">
            <div className="d-flex flex-column py-1">
              <Divider className="my-0"></Divider>
              <div className="container">
                <div className="py-2 d-flex flex-column">
                  <Text type="primary">Christmas gifts</Text>
                  <Text type="secondary">4 Listings  8 month ago</Text>
                </div>
              </div>
              <Divider className="my-0"></Divider>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>

      <div className="container bookmarkDetails">
        <div className="row">
          <div className="col-12 px-0 mb-3 mt-3">
            <div className="px-3">
            <Breadcrumb>
              <Breadcrumb.Item>Saved </Breadcrumb.Item>
              <Breadcrumb.Item>Christmas gifts</Breadcrumb.Item>
            </Breadcrumb>
            </div>
          </div>
          <div className="col-12 px-0">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
              <div className="cardBodyImgWrap flex-shrink-0">
                <Image
                width={'100%'}
                src="https://tinyurl.com/yxetcq2h"
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
          <div className="col-12 px-0">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
              <div className="cardBodyImgWrap flex-shrink-0">
                <Image
                width={'100%'}
                src="https://tinyurl.com/y2wmfu6p"
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
        </div>
      </div>

      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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

const MyProfile = () => {

  const menu = (
    <Menu>
      <Menu.Item>
          Comments
      </Menu.Item>
      <Menu.Item>
        Following
      </Menu.Item>
    </Menu>
  );
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>

      <div className="container myProfile">
        <div className="row">
          <div className="col-12 px-0">
            <div className="d-flex flex-row justify-content-between px-3 py-3">
              <div className="d-flex flex-row align-items-center">
                <div className="myProfileAvatarWrap">
                  <img src={avatar} className="myProfileAvatar"/>
                </div>
                <div className="ml-3">
                  <Title level={4} className="mb-0">Jane Cooper</Title>
                  <Text type="secondary">Musician | Vocalist</Text>
                </div>
              </div>
              <Button>Follow</Button>
            </div>
            <div className="customSecondaryBar">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Lists" key="1">
                  <div className="col-12 px-0">
                    <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
                      <div className="cardBodyImgWrap flex-shrink-0">
                        <Image
                        width={'100%'}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                      </div>
                      <div className="d-flex flex-column ml-2">
                        <Text type="primary" strong>The best wireless headphones you can buy in 2020</Text>
                        <span className="d-flex flex-row">
                          <Text type="secondary" className="mr-3">12 experts verified</Text>
                          <Text type="secondary">8 month ago</Text>
                        </span>
                      </div>
                    </div>
                    <Divider className="my-0"/>
                  </div>
                </TabPane>
                <TabPane tab="Favorites" key="2">
                  <div className="col-12 px-0">
                    <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
                      <div className="cardBodyImgWrap flex-shrink-0">
                        <Image
                        width={'100%'}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                        <div className="favOverlay">
                          <HeartFilled style={{fontSize:"24px",}}/>
                        </div>
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
                <TabPane tab="Squads">
                  <div className="col-12 px-0">
                    <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
                      <div className="cardBodyImgWrap flex-shrink-0">
                        <Image
                        width={'100%'}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        />
                      </div>
                      <div className="d-flex flex-column ml-2">
                        <Text type="primary" strong>Musicaly</Text>
                        <span className="d-flex flex-column">
                          <Text type="secondary" className="mr-3">For music enthusiasts</Text>
                          <div>
                            <Tag color="#87d068">Admin</Tag>
                          </div>
                        </span>
                      </div>
                    </div>
                    <Divider className="my-0"/>
                  </div>
                </TabPane>
              </Tabs>
              <div className="myProfileMore">
              <Dropdown overlay={menu} placement="bottomRight" arrow>
                <Button>More <DownOutlined /></Button>
              </Dropdown>
            </div>
          </div>
          </div>
          
        </div>
      </div>

      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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

function MyComments(){
  const menu2 = (
    <Menu>
      <Menu.Item>
          Comments
      </Menu.Item>
      <Menu.Item>
        Following
      </Menu.Item>
    </Menu>
  );
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container myComments">
        <div className="row">
          <div className="col-12 px-0">
            <div className="d-flex flex-row justify-content-between px-3 py-3">
              <div className="d-flex flex-row align-items-center">
                <div className="myProfileAvatarWrap">
                  <img src={avatar} className="myProfileAvatar"/>
                </div>
                <div className="ml-3">
                  <Title level={4} className="mb-0">Jane Cooper</Title>
                  <Text type="secondary">Musician | Vocalist</Text>
                </div>
              </div>
              <Button>Follow</Button>
            </div>
            <div className="customSecondaryBar">
              <Tabs>
                <TabPane tab="Lists">
                </TabPane>
                <TabPane tab="Favorites">
                </TabPane>
                <TabPane tab="Squads">
                </TabPane>
              </Tabs>
              <div className="myProfileMore">
                <Dropdown overlay={menu2} placement="bottomRight" arrow>
                  <Button>More <DownOutlined /></Button>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="col-12 px-0">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
              <div className="cardBodyImgWrap flex-shrink-0">
                <Image
                width={'100%'}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </div>
              <div className="d-flex flex-column ml-3">
                <Text type="primary">Thank you for the suggestion, i bought this and it was amazing.</Text>
                <span className="d-flex flex-row">
                  <Text type="secondary" className="mr-3">Jane Cooper</Text>
                  <Text type="secondary">8 month ago</Text>
                </span>
              </div>
            </div>
            <Divider className="my-0"/>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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

function MyFollowings(){
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>

      <div className="container myComments">
        <div className="row">
          <div className="col-12 px-0">
            <div className="d-flex flex-row justify-content-between px-3 py-3">
              <div className="d-flex flex-row align-items-center">
                <div className="myProfileAvatarWrap">
                  <img src={avatar} className="myProfileAvatar"/>
                </div>
                <div className="ml-3">
                  <Title level={4} className="mb-0">Jane Cooper</Title>
                  <Text type="secondary">Musician | Vocalist</Text>
                </div>
              </div>
              <Button>Follow</Button>
            </div>
            <div className="customSecondaryBar">
              <Tabs>
                <TabPane tab="Lists">
                </TabPane>
                <TabPane tab="Favorites">
                </TabPane>
                <TabPane tab="Squads">
                </TabPane>
              </Tabs>
              <div className="myProfileMore">
                <Dropdown placement="bottomRight" arrow>
                  <Button>More <DownOutlined /></Button>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="col-12 px-0">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
              <div className="cardBodyImgWrap flex-shrink-0">
                <Image
                width={'100%'}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </div>
              <div className="d-flex flex-column ml-3">
                <Text type="primary">Boy Pablo</Text>
                <span className="d-flex flex-row">
                  <Text type="secondary" className="mr-3">Nostalgic indie-pop</Text>
                </span>
              </div>
            </div>
            <Divider className="my-0"/>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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

function AccountSettings(){
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container accountsettings">
        <div className="row">
          <div className="col-12 px-0">
          <div className="d-flex flex-row px-3 py-3">
              <div className="d-flex flex-row align-items-center">
                <div className="myProfileAvatarWrap">
                  <img src={avatar} className="myProfileAvatar"/>
                </div>
                <div className="ml-3 d-flex flex-column">
                  <Text type="primary">Jane Cooper</Text>
                  <Text type="secondary">Musician | Vocalist</Text>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 px-0 settingMenu">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3 align-items-center">
                <ToolOutlined className="mr-3" style={{fontSize:"24px"}} />
                <Text type="primary">Profile Settings</Text>
            </div>
            <Divider className="my-0"/>
          </div>
          <div className="col-12 px-0 settingMenu">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3 align-items-center">
                <LockOutlined className="mr-3" style={{fontSize:"24px"}} />
                <Text type="primary">Account and Security</Text>
            </div>
            <Divider className="my-0"/>
          </div>
          <div className="col-12 px-0 settingMenu">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3 align-items-center">
                <SafetyOutlined className="mr-3" style={{fontSize:"24px"}} />
                <Text type="primary">Privacy  Policy</Text>
            </div>
            <Divider className="my-0"/>
          </div>
          <div className="col-12 px-0 settingMenu">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3 align-items-center">
                <QuestionCircleOutlined className="mr-3" style={{fontSize:"24px"}} />
                <Text type="primary">Help Center</Text>
            </div>
            <Divider className="my-0"/>
          </div>
          <div className="col-12 px-0 settingMenu">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3 align-items-center">
                <DollarOutlined className="mr-3" style={{fontSize:"24px"}} />
                <Text type="primary">Monetization</Text>
            </div>
            <Divider className="my-0"/>
          </div>
          <div className="col-12 px-0 settingMenu">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3 align-items-center">
                <Text type="danger"><LogoutOutlined className="mr-3" style={{fontSize:"24px"}}/></Text>
                <Text type="danger">Logout</Text>
            </div>
            <Divider className="my-0"/>
          </div>

        </div>
      </div>
      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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

function MyMessages(){
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>

      <div className="container myMessages">
        <div className="row">
        <div className="col-12 px-0">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
              <div className="cardBodyImgWrap flex-shrink-0">
                <Image
                width={'100%'}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </div>
              <div className="d-flex flex-column ml-3">
                <Text type="primary">Welcome to rankly, im sophy ill help you get started.</Text>
                <span className="d-flex flex-row">
                  <Text type="secondary" className="mr-3">Rankly 4 weeks ago</Text>
                </span>
              </div>
            </div>
            <Divider className="my-0"/>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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

function SearchResults(){
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <Search placeholder="input search text" />
            <div style={{width:'32px', height:'32px', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <CloseOutlined style={{fontSize:"18px"}}/>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container searchList">
      <div className="row">
          <div className="col-12 px-0">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Lists" key="1">
              <div className="col-12 px-0">
                <div className="d-flex flex-row detailsSecondaryCard mb-2 px-3 py-2">
                  <div className="cardBodyImgWrap flex-shrink-0">
                    <Image
                    width={'100%'}
                    src="https://tinyurl.com/yxetcq2h"
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
                    src="https://tinyurl.com/y2wmfu6p"
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
            <TabPane tab="People" key="3">
            <div className="col-12 px-0">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-2">
              <div className="cardBodyImgWrap flex-shrink-0">
                <Image
                width={'100%'}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </div>
              <div className="d-flex flex-column ml-3">
                <Text type="primary">Boy Pablo</Text>
                <span className="d-flex flex-row">
                  <Text type="secondary" className="mr-3">Nostalgic indie-pop</Text>
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
    </div>
  )
}

function CreateList(){
  return(
    <div>
       <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>

      <div className="container createList">
        <div className="row">
          <div className="d-flex flex-column createListWrap col-12 px-0">
            <div>
              <div className="col-12 py-3">
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <Title level={5}>Create Lists</Title>
                  <Button type="primary">Primary Button <ArrowRightOutlined className="ml-3"/></Button>
                </div>
              </div>
              <div className="col-12 px-0 px-sm-0 px-md-0 px-lg-2">
                <Dragger {...props} className="py-4">
                  <p className="ant-upload-drag-icon mb-2">
                    <PlusOutlined style={{ fontSize: '18px'}} />
                  </p>
                  <p className="ant-upload-hint">Click or drag file to this area to upload</p>
                </Dragger>
              </div>
              <div className="col-12 px-sm-0">
                <Input placeholder="List name" className="border-left-0  border-right-0 border-top-0 lineInput" style={{borderRadius:'0px'}}/>
              </div>
            </div>
            <div className="listDescription">
              <div className="col-12 px-sm-0" style={{height:"100%"}}>
                <TextArea style={{height:"100%"}} className="border-left-0  border-right-0 border-top-0 lineInput" placeholder="List details" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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

function ListInitial() {
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>

      <div className="container listInitial position-relative">
        <div className="row">
          <div className="col-12 px-0">
              <div className="d-flex flex-row detailsSecondaryCard mb-2 px-3 py-3 justify-content-between">
                <div className="d-flex flex-row">
                  <div className="cardBodyImgWrap flex-shrink-0">
                    <Image
                    width={'100%'}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <div className="favOverlay">
                      <EditOutlined style={{fontSize:"24px",}}/>
                    </div>
                  </div>
                  <div className="d-flex flex-column ml-2">
                    <Text type="primary" strong>The best wireless headphones you can buy in 2020</Text>
                    <span className="d-flex flex-row">
                      <Text type="secondary" className="mr-3">Jane Cooper</Text>
                      <Text type="secondary">8 month ago</Text>
                    </span>
                  </div>
                </div>
                <div>
                  <MoreOutlined />
                </div>
              </div>
          </div>
          <div className="col-12">
            <Button icon={<PlusOutlined />} className="w-100">Add a list item</Button>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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

function CreateListItem() {
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar py-2">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <ArrowLeftOutlined style={{ fontSize: '24px'}}/>
            </div>
            <div className="d-flex flex-row align-items-center">
              <UploadOutlined style={{ fontSize: '24px'}} className="mr-5"/>
              <CheckOutlined style={{ fontSize: '24px'}} className="mr-5"/>
              <DeleteOutlined style={{ fontSize: '24px'}} className="mr-5"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-5"/>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container createListItem">
        <div className="row">
          <div className="col-12 px-0 createListItemWrap d-flex flex-column">
            <div>
              <div className="col-12 px-0">
                <Input placeholder="Item name" className="border-left-0  border-right-0 border-top-0 lineInput" style={{borderRadius:'0px', height:'48px'}}/>
              </div>
              <div className="col-12 px-0">
                <Input placeholder="Add URL" className="border-left-0  border-right-0 border-top-0 lineInput" style={{borderRadius:'0px', height:'48px'}}/>
              </div>
              <div className="col-12 px-0 inputLG border-x-0">
                <Select defaultValue="No Button" style={{ width: '100%', height:'48px' }} className="border-left-0 border-right-0">
                  <Option value="jack">Apply Now</Option>
                  <Option value="lucy">Book Now</Option>
                </Select>
              </div>
              <div className="col-12 px-0 d-flex flex-row formUpload border-bottom bg-light">
                <div className="flex-1 flex-fill d-flex align-items-center">
                  <Text type="secondary" className="pl-2">Upload image</Text>
                </div>
                <Upload {...props}>
                  <Button icon={<UploadOutlined />}>Upload</Button>
                </Upload>
              </div>
            </div>
            <div className="listDescription">
              <div className="col-12 px-0" style={{height:"100%"}}>
                <TextArea style={{height:"100%"}} className="border-left-0  border-right-0 border-top-0 lineInput" placeholder="List details" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ListCreated() {
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container listInitial position-relative">
        <div className="row">
          <div className="col-12 px-0">
              <div className="d-flex flex-row detailsSecondaryCard px-3 py-3 justify-content-between">
                <div className="d-flex flex-row">
                  <div className="cardBodyImgWrap flex-shrink-0">
                    <Image
                    width={'100%'}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <div className="favOverlay">
                      <EditOutlined style={{fontSize:"24px",}}/>
                    </div>
                  </div>
                  <div className="d-flex flex-column ml-2">
                    <Text type="primary" strong>The best wireless headphones you can buy in 2020</Text>
                    <span className="d-flex flex-row">
                      <Text type="secondary" className="mr-3">Jane Cooper</Text>
                      <Text type="secondary">8 month ago</Text>
                    </span>
                  </div>
                </div>
                <div>
                  <MoreOutlined />
                </div>
              </div>
              <Divider className="my-0"/>
          </div>
          <div className="col-12 px-0">
              <div className="d-flex flex-row detailsSecondaryCard px-3 py-3 justify-content-between">
                <div className="d-flex flex-row">
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
                <div>
                  <img src={move}/>
                </div>
              </div>
              <Divider className="my-0"/>
          </div>
        </div>
        <Button type="primary" shape="circle" icon={<PlusOutlined />} style={{width: '48px',height: '48px', position:'absolute', bottom:'64px',right:'0px'}}/>
      </div>
      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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

function Notifications() {
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container notifications">
        <div className="row">
          <div className="col-12 px-0">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
              <div className="cardBodyImgWrap flex-shrink-0">
                <Image
                width={'100%'}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </div>
              <div className="d-flex flex-column ml-3">
                <Text type="primary">Robert Murphy requested you to join the squad Musicians.</Text>
                <span className="d-flex flex-row">
                  <Text type="secondary" className="mr-3">1 hour ago</Text>
                </span>
                <div className="d-flex flex-row mt-2">
                  <Button type="primary" className="mr-2">View Squad</Button>
                  <Button>Ignore</Button>
                </div>
              </div>
            </div>
            <Divider className="my-0"/>
          </div>
          <div className="col-12 px-0">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
              <div className="cardBodyImgWrap flex-shrink-0">
                <Image
                width={'100%'}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </div>
              <div className="d-flex flex-column ml-3">
                <Text type="primary">Robert Murphy requested you to review his list Best headphones 2020.</Text>
                <span className="d-flex flex-row">
                  <Text type="secondary" className="mr-3">1 hour ago</Text>
                </span>
                <div className="d-flex flex-row mt-2">
                  <Button type="primary" className="mr-2">Accept</Button>
                  <Button>Reject</Button>
                </div>
              </div>
            </div>
            <Divider className="my-0"/>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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

function SquadRequest() {
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container notifications">
        <div className="row">
          <div className="col-12 px-0">
            <div className="d-flex flex-column px-3 py-3">
              <Title level={5}>Robert’s Muscians Squad</Title>
              <div className="d-flex flex-row mt-2">
                  <Button type="primary" className="mr-2">Accept</Button>
                  <Button>Reject</Button>
                </div>
            </div>
          </div>
          <div className="col-12 px-0">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3 justify-content-between">
              <div className="d-flex flex-row">
                <div className="cardBodyImgWrap flex-shrink-0">
                  <Image
                  width={'100%'}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </div>
                <div className="d-flex flex-column ml-3">
                  <Text type="primary">Robert Murphy</Text>
                  <span className="d-flex flex-row">
                    <Tag color="#87d068">Member</Tag>
                    <Text type="secondary" className="mr-3">Expert Musician</Text>
                  </span>
                </div>
              </div>
              <div>
                <MoreOutlined />
              </div>
            </div>
            <Divider className="my-0"/>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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

function MessageBody() {
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container messageBody">
        <div className="row">
          <div className="col-12 px-0">
            <div className="d-flex flex-column px-3 py-3">
            <Divider>Today</Divider>
            </div>
          </div>
          <div className="col-12 px-0">
            <div className="d-flex flex-column px-3 py-2 messageContent">
              <div className="rowSetter">
                <div className="messageWrap d-flex flex-column">
                  <div className="sentMessage">
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam eros, commodo a mi quis, semper sodales est.</p>
                  </div>
                  <p style={{ fontSize: '12px'}} className="mb-0 mt-1">10.15 AM</p>
                </div>
              </div>
              <div className="rowSetter">
                <div className="messageWrap d-flex flex-column">
                  <div className="recivedMessage">
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam eros, commodo a mi quis, semper sodales est.</p>
                  </div>
                  <p style={{ fontSize: '12px'}} className="mb-0 mt-1">10.15 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 fixedBottom bg-white">
        <Divider className="my-0"/>
        <div className="d-flex flex-row">
          <Form.Item className="mb-0 border-0 compose-textarea w-100">
            <Input.TextArea />
          </Form.Item>
          <a className="d-flex align-items-center justify-content-center compose-send">
            <SendOutlined style={{ fontSize: '18px'}}/>
          </a>
        </div>
      </div>
    </div>
  )
}

function SquadPage() {
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <img src={logo} className="Applogo mr-3" alt="logo" />
            </div>
            <div className="d-none d-lg-flex flex-grow-1">
              <Search className="px-5" placeholder="input search text" />
            </div>
            <div className="d-flex flex-row align-items-center">
              <SearchOutlined style={{ fontSize: '24px'}} className="d-lg-none mr-4 mr-lg-5"/>
              <HeartOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <img src={bookmark} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <MailOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5 d-none d-lg-block"/>
              <BellOutlined style={{ fontSize: '24px'}} className="mr-4 mr-lg-5"/>
              <div className="navAvatarImgWrap">
                <img src={avatar} className="navAvatarImg"/>
              </div>
              <Button type="primary" className="ml-4 d-none d-lg-block">Create Post</Button>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>

      <div className="container squadPage">
        <div className="row">
          <div className="col-12 px-0">
            <Tabs defaultActiveKey="1">
              <TabPane tab="My Squads" key="1">
                <div className="col-12 px-0">
                  <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
                    <div className="cardBodyImgWrap flex-shrink-0">
                      <Image
                      width={'100%'}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      />
                    </div>
                    <div className="d-flex flex-column ml-2">
                      <Text type="primary" strong>Musicaly</Text>
                      <span className="d-flex flex-column">
                        <Text type="secondary" className="mr-3">For music enthusiasts</Text>
                        <div>
                          <Tag color="#87d068">Admin</Tag>
                        </div>
                      </span>
                    </div>
                  </div>
                  <Divider className="my-0"/>
                </div>
              </TabPane>
              <TabPane tab="Other Squads" key="2">
                <div className="col-12 px-0">
                  <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
                    <div className="cardBodyImgWrap flex-shrink-0">
                      <Image
                      width={'100%'}
                      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                      />
                    </div>
                    <div className="d-flex flex-column ml-2">
                      <Text type="primary" strong>Musicaly</Text>
                      <span className="d-flex flex-column">
                        <Text type="secondary" className="mr-3">For music enthusiasts</Text>
                      </span>
                    </div>
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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

function SquadPageDetails() {
  return(
    <div>
      <div className="container-fluid px-0 fixedTop bg-white">
        <div className="container navBar py-2">
          <div className="d-flex flex-row py-2 align-items-center justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <ArrowLeftOutlined style={{ fontSize: '24px'}}/>
              <Title level={5} className="ml-3 mb-0">Musicaly</Title>
            </div>
          </div>
        </div>
        <Divider className="my-0"/>
      </div>
      <div className="container squadDetails">
        <div className="row">
          <div className="col-12 px-0">
            <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
              <div className="cardBodyImgWrap flex-shrink-0">
                <Image
                width={'100%'}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </div>
              <div className="d-flex flex-column ml-2">
                <Text type="primary" strong>Musicaly</Text>
                <span className="d-flex flex-column">
                  <Text type="secondary" className="mr-3">For music enthusiasts</Text>
                  <div>
                    <Tag color="#87d068">Admin</Tag>
                  </div>
                </span>
              </div>
            </div>
            <Divider className="my-0"/>
          </div>  
        </div>
      </div>
      <div className="container squadDetailsSecondary">
        <div className="row">
          <div className="col-12 px-0">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Members" key="1">
            <div className="col-12 px-0">
              <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
                <div className="cardBodyImgWrap flex-shrink-0">
                  <Image
                  width={'100%'}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                  />
                </div>
                <div className="d-flex flex-column ml-3">
                  <Text type="primary">Boy Pablo</Text>
                  <span className="d-flex flex-row align-items-center">
                    <Text type="secondary"><RiseOutlined/></Text><Text className="ml-2" type="secondary">Contribution 10</Text>
                  </span>
                </div>
              </div>
              <Divider className="my-0"/>
            </div>
            </TabPane>
            <TabPane tab="Activities" key="2">
              <div className="col-12 px-0">
                <div className="d-flex flex-row detailsSecondaryCard px-3 py-3">
                  <div className="cardBodyImgWrap flex-shrink-0">
                    <Image
                    width={'100%'}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                  </div>
                  <div className="d-flex flex-column ml-3">
                    <div className="d-flex flex-row">
                      <Text type="primary"><strong>Boy Pablo</strong> ranked</Text><Link className="ml-2">best headphones 2020 list.</Link> 
                    </div>
                    <span className="d-flex flex-row">
                      <Text type="secondary" className="mr-3">Yesterday at 8:09 AM</Text>
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
      <div className="container-fluid px-0 fixedBottom bg-white d-lg-none">
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