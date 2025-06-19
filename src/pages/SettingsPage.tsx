import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';

const SettingsPage: React.FC = () => {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Settings</h1>
        <p className="text-muted-foreground">Manage your account and application preferences.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your personal details.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" defaultValue="Alex Doe" placeholder="Your full name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="alexdoe" placeholder="Your username" />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" defaultValue="alex.doe@example.com" placeholder="Your email address" />
          </div>
          <Button>Save Profile</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
          <CardDescription>Manage your password and security settings.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Button variant="outline">Change Password</Button>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="twoFactor" />
            <Label htmlFor="twoFactor" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Enable Two-Factor Authentication
            </Label>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Configure how you receive notifications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <Label htmlFor="emailNotifications" className="font-medium">Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive updates and alerts via email.</p>
                </div>
                <Checkbox id="emailNotifications" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
                 <div>
                    <Label htmlFor="pushNotifications" className="font-medium">Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Get real-time alerts on your devices.</p>
                </div>
                <Checkbox id="pushNotifications" />
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;