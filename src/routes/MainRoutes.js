import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import CommonLayout from 'layout/CommonLayout';
import MainLayout from 'layout/MainLayout';
import CreateDraftOnHappeningAround from 'pages/CreateEvent/CreateDraftOnHappeningAround';
import CreateEventOnHappeningAround from 'pages/CreateEvent/CreateEventOnHappeningAround';
import SubmitReviewOnHappeningAround from 'pages/CreateEvent/SubmitReviewOnHappeningAround';
import ManageEventHappeningAround from 'pages/ManageEvent/ManageEventHappeningAround';
import SingleEventHappeningAround from 'pages/ManageEvent/SingleEventHappeningAround';
import SingleEventSettings from 'pages/ManageEvent/SingleEventSettings';
import SingleEventSettingsHappeningAround from 'pages/ManageEvent/SingleEventSettingsHappeningAround';
import AuthGuard from 'utils/route-guard/AuthGuard';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/default')));
// const DashboardAnalytics = Loadable(lazy(() => import('pages/dashboard/analytics')));

// render - create Event
const CreateEvent = Loadable(lazy(() => import('pages/CreateEvent/CreateEvent')));
const SubmitReview = Loadable(lazy(() => import('pages/CreateEvent/SubmitReview')));
const CreateDraft = Loadable(lazy(() => import('pages/CreateEvent/CreateDraft')));

// render - Company Information
const CompanyInformation = Loadable(lazy(() => import('pages/CompanyInformation/CompanyInformation')));

// render - Settings user information
const SettingsUser = Loadable(lazy(() => import('pages/SettingsUser/SettingsUser')));
const Password = Loadable(lazy(() => import('pages/SettingsUser/Password')));

const ManageEvent = Loadable(lazy(() => import('pages/ManageEvent/ManageEvent')));
const SingleEvent = Loadable(lazy(() => import('pages/ManageEvent/SingleEvent')));
const PreRegistration = Loadable(lazy(() => import('pages/ManageEvent/PreRegistration')));
const CreatePreRegistration = Loadable(lazy(() => import('pages/ManageEvent/CreatePreRegistration')));
const EditPreRegistration = Loadable(lazy(() => import('pages/ManageEvent/EditPreRegistration')));
const GateManagement = Loadable(lazy(() => import('pages/ManageEvent/GateManagement')));
const SingleEventsPriviliege = Loadable(lazy(() => import('pages/ManageEvent/SingleEventsPriviliege')));
const PromotionDiscount = Loadable(lazy(() => import('pages/ManageEvent/PromotionDiscount')));
const SingleEventTicket = Loadable(lazy(() => import('pages/ManageEvent/SingleEventTicket')));
const EarlyBirdTicket = Loadable(lazy(() => import('pages/ManageEvent/EarlyBirdTicket')));
const TicketDetails = Loadable(lazy(() => import('pages/ManageEvent/TicketDetails')));
const EarlyBirdTicketDetails = Loadable(lazy(() => import('pages/ManageEvent/EarlyBirdTicketDetails')));

// Ticketing & Regi8stration
const TicketReg = Loadable(lazy(() => import('pages/TicketReg/TicketReg')));

// render - widget
const WidgetStatistics = Loadable(lazy(() => import('pages/widget/statistics')));
const WidgetData = Loadable(lazy(() => import('pages/widget/data')));
const WidgetChart = Loadable(lazy(() => import('pages/widget/chart')));

// render - applications
const AppChat = Loadable(lazy(() => import('pages/apps/chat')));
const AppCalendar = Loadable(lazy(() => import('pages/apps/calendar')));
const AppCustomerList = Loadable(lazy(() => import('pages/apps/customer/list')));

const UserProfile = Loadable(lazy(() => import('pages/apps/profiles/user')));
const UserTabPersonal = Loadable(lazy(() => import('sections/apps/profiles/user/TabPersonal')));
const UserTabPayment = Loadable(lazy(() => import('sections/apps/profiles/user/TabPayment')));
const UserTabPassword = Loadable(lazy(() => import('sections/apps/profiles/user/TabPassword')));
const AccountTabRole = Loadable(lazy(() => import('sections/apps/profiles/account/TabRole')));
const UserTabSettings = Loadable(lazy(() => import('sections/apps/profiles/user/TabSettings')));

const AccountProfile = Loadable(lazy(() => import('pages/apps/profiles/account')));
const AccountTabProfile = Loadable(lazy(() => import('sections/apps/profiles/account/TabProfile')));
const AccountTabPersonal = Loadable(lazy(() => import('sections/apps/profiles/account/TabPersonal')));
const AccountTabAccount = Loadable(lazy(() => import('sections/apps/profiles/account/TabAccount')));
const AccountTabPassword = Loadable(lazy(() => import('sections/apps/profiles/account/TabPassword')));
const AccountTabSettings = Loadable(lazy(() => import('sections/apps/profiles/account/TabSettings')));

const ProfileUserList = Loadable(lazy(() => import('pages/apps/profiles/user-list')));
const ProfileUserCard = Loadable(lazy(() => import('pages/apps/profiles/user-card')));

const AppECommProducts = Loadable(lazy(() => import('pages/apps/e-commerce/product')));
const AppECommProductDetails = Loadable(lazy(() => import('pages/apps/e-commerce/product-details')));
const AppECommProductList = Loadable(lazy(() => import('pages/apps/e-commerce/products-list')));
const AppECommCheckout = Loadable(lazy(() => import('pages/apps/e-commerce/checkout')));
const AppECommAddProduct = Loadable(lazy(() => import('pages/apps/e-commerce/add-product')));

// render - forms & tables
const FormsValidation = Loadable(lazy(() => import('pages/forms/validation')));
const FormsWizard = Loadable(lazy(() => import('pages/forms/wizard')));

const FormsLayoutBasic = Loadable(lazy(() => import('pages/forms/layouts/basic')));
const FormsLayoutMultiColumn = Loadable(lazy(() => import('pages/forms/layouts/multi-column')));
const FormsLayoutActionBar = Loadable(lazy(() => import('pages/forms/layouts/action-bar')));
const FormsLayoutStickyBar = Loadable(lazy(() => import('pages/forms/layouts/sticky-bar')));

const FormsPluginsMask = Loadable(lazy(() => import('pages/forms/plugins/mask')));
const FormsPluginsClipboard = Loadable(lazy(() => import('pages/forms/plugins/clipboard')));
const FormsPluginsRecaptcha = Loadable(lazy(() => import('pages/forms/plugins/re-captcha')));
const FormsPluginsEditor = Loadable(lazy(() => import('pages/forms/plugins/editor')));
const FormsPluginsDropzone = Loadable(lazy(() => import('pages/forms/plugins/dropzone')));

const ReactTableBasic = Loadable(lazy(() => import('pages/tables/react-table/basic')));
const ReactTableSorting = Loadable(lazy(() => import('pages/tables/react-table/sorting')));
const ReactTableFiltering = Loadable(lazy(() => import('pages/tables/react-table/filtering')));
const ReactTableGrouping = Loadable(lazy(() => import('pages/tables/react-table/grouping')));
const ReactTablePagination = Loadable(lazy(() => import('pages/tables/react-table/pagination')));
const ReactTableRowSelection = Loadable(lazy(() => import('pages/tables/react-table/row-selection')));
const ReactTableExpanding = Loadable(lazy(() => import('pages/tables/react-table/expanding')));
const ReactTableEditable = Loadable(lazy(() => import('pages/tables/react-table/editable')));
const ReactTableDragDrop = Loadable(lazy(() => import('pages/tables/react-table/drag-drop')));
const ReactTableColumnHiding = Loadable(lazy(() => import('pages/tables/react-table/column-hiding')));
const ReactTableUmbrella = Loadable(lazy(() => import('pages/tables/react-table/umbrella')));

// render - charts & map
const ChartApexchart = Loadable(lazy(() => import('pages/charts/apexchart')));
const ChartOrganization = Loadable(lazy(() => import('pages/charts/org-chart')));

// table routing
const MuiTableBasic = Loadable(lazy(() => import('pages/tables/mui-table/basic')));
const MuiTableDense = Loadable(lazy(() => import('pages/tables/mui-table/dense')));
const MuiTableEnhanced = Loadable(lazy(() => import('pages/tables/mui-table/enhanced')));
const MuiTableDatatable = Loadable(lazy(() => import('pages/tables/mui-table/datatable')));
const MuiTableCustom = Loadable(lazy(() => import('pages/tables/mui-table/custom')));
const MuiTableFixedHeader = Loadable(lazy(() => import('pages/tables/mui-table/fixed-header')));
const MuiTableCollapse = Loadable(lazy(() => import('pages/tables/mui-table/collapse')));

// pages routing
const AuthLogin = Loadable(lazy(() => import('pages/auth/login')));
const AuthRegister = Loadable(lazy(() => import('pages/auth/register')));
const AuthForgotPassword = Loadable(lazy(() => import('pages/auth/forgot-password')));
const AuthResetPassword = Loadable(lazy(() => import('pages/auth/reset-password')));
const AuthCheckMail = Loadable(lazy(() => import('pages/auth/check-mail')));
const AuthCodeVerification = Loadable(lazy(() => import('pages/auth/code-verification')));

const MaintenanceError = Loadable(lazy(() => import('pages/maintenance/404')));
const MaintenanceError500 = Loadable(lazy(() => import('pages/maintenance/500')));
const MaintenanceUnderConstruction = Loadable(lazy(() => import('pages/maintenance/under-construction')));
const MaintenanceComingSoon = Loadable(lazy(() => import('pages/maintenance/coming-soon')));

const AppContactUS = Loadable(lazy(() => import('pages/contact-us')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));
const PricingPage = Loadable(lazy(() => import('pages/extra-pages/pricing')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: 'dashboard',
          children: [
            {
              path: 'default',
              element: <DashboardDefault />
            }
          ]
        },
        {
          path: 'create-event',
          element: <CreateEvent />
        },
        {
          path: 'create-draft',
          element: <CreateDraft />
        },
        {
          path: 'create-submitted',
          element: <SubmitReview />
        },
        {
          path: 'create-event-on-happening-around',
          element: <CreateEventOnHappeningAround />
        },
        {
          path: 'create-draft-on-happening-around',
          element: <CreateDraftOnHappeningAround />
        },
        {
          path: 'create-submitted-on-happening-around',
          element: <SubmitReviewOnHappeningAround />
        },
        {
          path: 'company-information',
          element: <CompanyInformation />
        },
        {
          path: 'manage-featured-event',
          element: <ManageEvent />
        },

        {
          path: 'single-event',
          element: <SingleEvent />
        },
        {
          path: 'manage-events-on-happening-around',
          element: <ManageEventHappeningAround />
        },
        {
          path: 'single-event-on-happening-around',
          element: <SingleEventHappeningAround />
        },
        {
          path: 'single-event-settings-happening-around',
          element: <SingleEventSettingsHappeningAround />
        },
        {
          path: 'users-roles',
          element: <SettingsUser />
        },
        {
          path: 'event-pre-registration',
          element: <PreRegistration />
        },
        {
          path: 'create-pre-registration',
          element: <CreatePreRegistration />
        },

        {
          path: 'edit-pre-registration',
          element: <EditPreRegistration />
        },
        {
          path: 'event-gate-management',
          element: <GateManagement />
        },
        {
          path: 'single-event-settings',
          element: <SingleEventSettings />
        },
        {
          path: 'event-priviliege-ticket',
          element: <SingleEventsPriviliege />
        },
        {
          path: 'event-promotions-discount',
          element: <PromotionDiscount />
        },
        {
          path: 'event-ticketing-registration',
          element: <SingleEventTicket />
        },
        {
          path: 'tickets-details',
          element: <TicketDetails />
        },
        {
          path: 'event-early-bird-tickets',
          element: <EarlyBirdTicket />
        },
        {
          path: 'early-bird-tickets-details',
          element: <EarlyBirdTicketDetails />
        },
        {
          path: 'users-passwords',
          element: <Password />
        },
        {
          path: 'ticket-and-registration/:slug',
          element: <TicketReg />
        },
        {
          path: 'widget',
          children: [
            {
              path: 'statistics',
              element: <WidgetStatistics />
            },
            {
              path: 'data',
              element: <WidgetData />
            },
            {
              path: 'chart',
              element: <WidgetChart />
            }
          ]
        },
        {
          path: 'apps',
          children: [
            {
              path: 'chat',
              element: <AppChat />
            },
            {
              path: 'calendar',
              element: <AppCalendar />
            },
            {
              path: 'customer',
              children: [
                {
                  path: 'list',
                  element: <AppCustomerList />
                }
              ]
            },
            {
              path: 'profiles',
              children: [
                {
                  path: 'account',
                  element: <AccountProfile />,
                  children: [
                    {
                      path: 'basic',
                      element: <AccountTabProfile />
                    },
                    {
                      path: 'personal',
                      element: <AccountTabPersonal />
                    },
                    {
                      path: 'my-account',
                      element: <AccountTabAccount />
                    },
                    {
                      path: 'password',
                      element: <AccountTabPassword />
                    },
                    {
                      path: 'role',
                      element: <AccountTabRole />
                    },
                    {
                      path: 'settings',
                      element: <AccountTabSettings />
                    }
                  ]
                },
                {
                  path: 'user',
                  element: <UserProfile />,
                  children: [
                    {
                      path: 'personal',
                      element: <UserTabPersonal />
                    },
                    {
                      path: 'payment',
                      element: <UserTabPayment />
                    },
                    {
                      path: 'password',
                      element: <UserTabPassword />
                    },
                    {
                      path: 'settings',
                      element: <UserTabSettings />
                    }
                  ]
                },
                {
                  path: 'user-list',
                  element: <ProfileUserList />
                },
                {
                  path: 'user-card',
                  element: <ProfileUserCard />
                }
              ]
            },
            {
              path: 'e-commerce',
              children: [
                {
                  path: 'products',
                  element: <AppECommProducts />
                },
                {
                  path: 'product-details/:id',
                  element: <AppECommProductDetails />
                },
                {
                  path: 'product-list',
                  element: <AppECommProductList />
                },
                {
                  path: 'add-new-product',
                  element: <AppECommAddProduct />
                },
                {
                  path: 'checkout',
                  element: <AppECommCheckout />
                }
              ]
            }
          ]
        },
        {
          path: 'forms',
          children: [
            {
              path: 'validation',
              element: <FormsValidation />
            },
            {
              path: 'wizard',
              element: <FormsWizard />
            },
            {
              path: 'layout',
              children: [
                {
                  path: 'basic',
                  element: <FormsLayoutBasic />
                },
                {
                  path: 'multi-column',
                  element: <FormsLayoutMultiColumn />
                },
                {
                  path: 'action-bar',
                  element: <FormsLayoutActionBar />
                },
                {
                  path: 'sticky-bar',
                  element: <FormsLayoutStickyBar />
                }
              ]
            },
            {
              path: 'plugins',
              children: [
                {
                  path: 'mask',
                  element: <FormsPluginsMask />
                },
                {
                  path: 'clipboard',
                  element: <FormsPluginsClipboard />
                },
                {
                  path: 're-captcha',
                  element: <FormsPluginsRecaptcha />
                },
                {
                  path: 'editor',
                  element: <FormsPluginsEditor />
                },
                {
                  path: 'dropzone',
                  element: <FormsPluginsDropzone />
                }
              ]
            }
          ]
        },
        {
          path: 'tables',
          children: [
            {
              path: 'react-table',
              children: [
                {
                  path: 'basic',
                  element: <ReactTableBasic />
                },
                {
                  path: 'sorting',
                  element: <ReactTableSorting />
                },
                {
                  path: 'filtering',
                  element: <ReactTableFiltering />
                },
                {
                  path: 'grouping',
                  element: <ReactTableGrouping />
                },
                {
                  path: 'pagination',
                  element: <ReactTablePagination />
                },
                {
                  path: 'row-selection',
                  element: <ReactTableRowSelection />
                },
                {
                  path: 'expanding',
                  element: <ReactTableExpanding />
                },
                {
                  path: 'editable',
                  element: <ReactTableEditable />
                },
                {
                  path: 'drag-drop',
                  element: <ReactTableDragDrop />
                },
                {
                  path: 'column-hiding',
                  element: <ReactTableColumnHiding />
                },
                {
                  path: 'umbrella',
                  element: <ReactTableUmbrella />
                }
              ]
            },
            {
              path: 'mui-table',
              children: [
                {
                  path: 'basic',
                  element: <MuiTableBasic />
                },
                {
                  path: 'dense',
                  element: <MuiTableDense />
                },
                {
                  path: 'enhanced',
                  element: <MuiTableEnhanced />
                },
                {
                  path: 'datatable',
                  element: <MuiTableDatatable />
                },
                {
                  path: 'custom',
                  element: <MuiTableCustom />
                },
                {
                  path: 'fixed-header',
                  element: <MuiTableFixedHeader />
                },
                {
                  path: 'collapse',
                  element: <MuiTableCollapse />
                }
              ]
            }
          ]
        },
        {
          path: 'charts',
          children: [
            {
              path: 'apexchart',
              element: <ChartApexchart />
            },
            {
              path: 'org-chart',
              element: <ChartOrganization />
            }
          ]
        },
        {
          path: 'sample-page',
          element: <SamplePage />
        },
        {
          path: 'pricing',
          element: <PricingPage />
        }
      ]
    },
    {
      path: '/maintenance',
      element: <CommonLayout />,
      children: [
        {
          path: '404',
          element: <MaintenanceError />
        },
        {
          path: '500',
          element: <MaintenanceError500 />
        },
        {
          path: 'under-construction',
          element: <MaintenanceUnderConstruction />
        },
        {
          path: 'coming-soon',
          element: <MaintenanceComingSoon />
        }
      ]
    },
    {
      path: '/auth',
      element: <CommonLayout />,
      children: [
        {
          path: 'login',
          element: <AuthLogin />
        },
        {
          path: 'register',
          element: <AuthRegister />
        },
        {
          path: 'forgot-password',
          element: <AuthForgotPassword />
        },
        {
          path: 'reset-password',
          element: <AuthResetPassword />
        },
        {
          path: 'check-mail',
          element: <AuthCheckMail />
        },
        {
          path: 'code-verification',
          element: <AuthCodeVerification />
        }
      ]
    },
    {
      path: '/',
      element: <CommonLayout layout="simple" />,
      children: [
        {
          path: 'contact-us',
          element: <AppContactUS />
        }
      ]
    }
  ]
};

export default MainRoutes;
