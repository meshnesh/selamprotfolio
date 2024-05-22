import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import WithLayout from 'WithLayout';
// Available layouts
import {
  Main as MainLayout,
} from './layouts';

// Landing pages
import {
  Home as HomeView
} from './views/landingPages';

// Supporting pages
import {
  About as AboutView,
  Services as ServicesView,
  Contact as ContactView,
  Pricing as PricingView,
  Customers as CustomersView,
  HireUs as HireUsView,
  Faq as FaqView,
  Privacy as PrivacyView,
  ComingSoon as ComingSoonView,
  MaintenanceMode as MaintenanceModeView,
  Cover as CoverView,
  NotFound as NotFoundView,
  Photography as PhotographyView,
  Missions as MissionsView,
  WomenEmpowerment as WomenEmpowermentView,
  CareerGuidance as CareerGuidanceView,
  FamilySuccessCoach as FamilySuccessCoachView,
} from './views/supportingPages';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path="/"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-about"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={AboutView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-services"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={ServicesView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/womenempowerment"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={WomenEmpowermentView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/careerguidance"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={CareerGuidanceView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/familysuccesscoach"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={FamilySuccessCoachView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-contact"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={ContactView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-pricing"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={PricingView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-photography"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={PhotographyView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-missions"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={MissionsView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-podcasts"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={CustomersView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-hire-us"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={HireUsView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-faq"
        element={((matchProps) => (
          <WithLayout {...matchProps} component={FaqView} layout={MainLayout} />
        ))()}
      />
      <Route
        exact
        path="/page-privacy"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={PrivacyView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-coming-soon"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={ComingSoonView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-maintenance-mode"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={MaintenanceModeView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-cover"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={CoverView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/page-not-found"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        path="*"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={MainLayout}
          />
        ))()}
      />
    </ReactRoutes>
  );
};

export default Routes;
