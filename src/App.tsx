import { Route, Routes } from "react-router-dom";
import {
  BlogPage,
  DiningDynamics,
  DiningPage,
  Layout,
  LoginForm,
  LoginProtection,
  MarketArea,
  NotFound,
  Protected,
  Sofa,
  SofaDynamicPage,
  AddAdmin,
  AddCategory,
  AddDesign,
  AddState,
  AddCity,
  AddLocation,
} from "./components";

export default function App() {
  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-between ">
      <Routes>
        <Route
          index
          element={<Protected component={<Layout component={<Sofa />} />} />}
        />

        <Route
          path="/market-area"
          element={
            <Protected component={<Layout component={<MarketArea />} />} />
          }
        />
        <Route
          path="/sofa"
          element={<Protected component={<Layout component={<Sofa />} />} />}
        />
        <Route
          path="/sofa/:categoryName"
          element={
            <Protected component={<Layout component={<SofaDynamicPage />} />} />
          }
        />
        <Route
          path="/blog"
          element={
            <Protected component={<Layout component={<BlogPage />} />} />
          }
        />
        <Route
          path="/dining"
          element={
            <Protected component={<Layout component={<DiningPage />} />} />
          }
        />
        <Route
          path="/dining/:categoryName"
          element={
            <Protected component={<Layout component={<DiningDynamics />} />} />
          }
        />
        <Route
          path="/login"
          element={
            <LoginProtection
              component={
                <Layout
                  component={
                    <div className="w-screen h-screen flex justify-center items-center">
                      <LoginForm />
                    </div>
                  }
                />
              }
            ></LoginProtection>
          }
        />

        <Route
          path="/dashboard/add-admin"
          element={
            <Protected
              component={
                <Layout
                  component={
                    <div className="w-screen h-screen flex justify-center items-center">
                      <AddAdmin />
                    </div>
                  }
                />
              }
            />
          }
        />
        <Route
          path="/dashboard/add-category"
          element={
            <Protected
              component={
                <Layout
                  component={
                    <div className="w-screen h-screen flex justify-center items-center">
                      <AddCategory />
                    </div>
                  }
                />
              }
            />
          }
        />
        <Route
          path="/dashboard/add-design"
          element={
            <Protected
              component={
                <Layout
                  component={
                    <div className="w-screen h-screen flex justify-center items-center">
                      <AddDesign />
                    </div>
                  }
                />
              }
            />
          }
        />

        <Route
          path="/dashboard/add-state"
          element={
            <Protected
              component={
                <Layout
                  component={
                    <div className="w-screen h-screen flex justify-center items-center">
                      <AddState />
                    </div>
                  }
                />
              }
            />
          }
        />
        <Route
          path="/dashboard/add-city"
          element={
            <Protected
              component={
                <Layout
                  component={
                    <div className="w-screen h-screen flex justify-center items-center">
                      <AddCity />
                    </div>
                  }
                />
              }
            />
          }
        />
        <Route
          path="/dashboard/add-location"
          element={
            <Protected
              component={
                <Layout
                  component={
                    <div className="w-screen h-screen flex justify-center items-center">
                      <AddLocation />
                    </div>
                  }
                />
              }
            />
          }
        />

        <Route path="*" element={<Layout component={<NotFound />} />} />
      </Routes>
    </div>
  );
}
