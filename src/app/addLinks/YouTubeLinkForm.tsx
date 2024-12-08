import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VideoIcon, LinkIcon } from 'lucide-react';
import { User } from './types';
import { SelectUser } from './SelectUser';
import { LoadingSpinner } from './LoadingSpinner';

interface YouTubeLinkFormProps {
  link: string;
  title: string | null;
  onLinkChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLinkBlur: () => void;
  onUserChange: (value: string) => void;
  onSubmit: () => void;
  users: User[];
  loading: boolean;
  error: string | null;
}

export const YouTubeLinkForm: React.FC<YouTubeLinkFormProps> = ({
  link,
  title,
  onLinkChange,
  onLinkBlur,
  onUserChange,
  onSubmit,
  users,
  loading,
  error
}) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <VideoIcon className="w-6 h-6 text-primary" />
          Add YouTube Video
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md text-destructive text-sm">
            {error}
          </div>
        )}
        
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              YouTube Link
            </label>
            <div className="relative">
              <Input
                placeholder="Paste YouTube URL here"
                value={link}
                onChange={onLinkChange}
                onBlur={onLinkBlur}
                className="pl-10"
                disabled={loading}
              />
              <LinkIcon className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {title && (
            <div className="p-3 bg-muted rounded-md">
              <h3 className="font-medium text-sm text-muted-foreground mb-1">Video Title</h3>
              <p className="text-sm">{title}</p>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Select User
            </label>
            <SelectUser
              users={users}
              handleUserChange={onUserChange}
              isLoading={loading}
            />
          </div>

          <Button
            onClick={onSubmit}
            className="w-full"
            disabled={loading || !link || !title}
          >
            {loading ? (
              <>
                <LoadingSpinner className="mr-2" />
                Processing...
              </>
            ) : (
              'Add Video'
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};