// <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky">
//   <div className="container p-1">
//     <a href className="navbar-brand logo">
//       <img src={logo} alt="LMiTS" height={20} />
//     </a>
//     <div className="collapse navbar-collapse" id="navbarCollapse">
//       <ui className="navbar-nav ml-auto navbar-center" id="mySidenav"></ui>
//       <div className="nav-item">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="dv-desktop-menu__login-button b-header__login-button header-login-action">
//               <div className="btn disabled">
//                 <p
//                   disableFocusRipple="true"
//                   disableRipple="true"
//                   onClick={handleClickOpen}
//                   className="font-weight-medium pb-0 mb-0 nav-name f-15"
//                   style={{ color: '#303952' }}
//                 >
//                   Download
//                 </p>
//               </div>
//               <a
//                 className="app-store"
//                 href="https://www.apple.com/in/ios/app-store/"
//                 target="_blank"
//               >
//                 <img src={appStoreImg} alt="LMiTS" height={25} />
//               </a>
//               <a
//                 className="play-store"
//                 href="https://play.google.com/store?hl=en_IN"
//                 target="_blank"
//               >
//                 <img src={playStoreImg} alt="LMiTS" height={25} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/*{!localStorage.getItem("lmits_auth_key")*/}
//       {/*  ? authentication*/}
//       {/*  : profHolder}*/}
//       {authentication}
//     </div>
//
//     <section>
//       <div className="row">
//         <div className="container">
//           <div className="popup" id="popupotplogin">
//             <div className="popup-inner">
//               <div className="popup__photo col-md-5">
//                 <img src={loginImg} alt="" />
//               </div>
//               <div className="popup__text col-md-7">
//                 <div className="card-body">{modalComponent()}</div>
//               </div>
//               <a className="popup__close" href="#">
//                 <i className="fa fa-close"></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//
//     <Dialog
//       className={classes.root}
//       disableBackdropClick="true"
//       maxWidth="sm"
//       onClose={handleClose}
//       aria-labelledby="customized-dialog-title"
//       open={open}
//     >
//       <DialogTitle
//         id="customized-dialog-title"
//         onClose={handleClose}
//       ></DialogTitle>
//       <DialogContent>
//         <div className="container">
//           <div className="row">
//             <div className="popup__photo col-md-5 m-auto">
//               <img src={loginImg} alt="" />
//             </div>
//             <div className="popup__text col-md-6">
//               <div className="card-body p-0">{modalComponent()}</div>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   </div>
// </nav>;
