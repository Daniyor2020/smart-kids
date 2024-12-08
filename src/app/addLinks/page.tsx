"use client";
import React, { useState, useEffect } from 'react';

import { YouTubeLinkForm } from './YouTubeLinkForm';

import type { User, Video, YouTubeLinkFormState } from './types';
import { extractYouTubeVideoId, fetchVideoTitle } from './utils';
import { useToast } from '../hooks/use-toast';


const initialState: YouTubeLinkFormState = {
  link: '',
  title: null,
  selectedUser: null,
  error: null,
  loading: false,
};

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
 const AddLinks: React.FC = () => {
  const [state, setState] = useState<YouTubeLinkFormState>(initialState);
  const [users, setUsers] = useState<User[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setState(prev => ({ ...prev, loading: true }));
    try {
      const response = await fetch(baseUrl + '/users');
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setState(prev => ({
        ...prev,
        error: 'Error fetching users. Please try again later.',
      }));
      console.error('Error fetching users:', err);
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  };

  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(prev => ({
      ...prev,
      link: event.target.value,
      error: null,
    }));
  };

  const handleLinkBlur = async () => {
    const videoId = extractYouTubeVideoId(state.link);
    if (!videoId) {
      setState(prev => ({
        ...prev,
        error: 'Please enter a valid YouTube URL',
      }));
      return;
    }

    setState(prev => ({ ...prev, loading: true }));
    try {
      const title = await fetchVideoTitle(videoId);
      setState(prev => ({ ...prev, title, error: null }));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err ) {
      setState(prev => ({
        ...prev,
        error: 'Failed to fetch video title. Please check the URL.',
      }));
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  };

  const handleUserChange = (value: string) => {
    setState(prev => ({
      ...prev,
      selectedUser: value,
      error: null,
    }));
  };

  const handleSubmit = async () => {
    if (!state.link || !state.selectedUser || !state.title) {
      setState(prev => ({
        ...prev,
        error: 'Please fill in all required fields.',
      }));
      return;
    }

    const videoId = extractYouTubeVideoId(state.link);
    if (!videoId) return;

    setState(prev => ({ ...prev, loading: true }));

    const payload: Video = {
      url: state.link,
      thumbnail: `https://img.youtube.com/vi/${videoId}/0.jpg`,
      user_id: state.selectedUser,
      title: state.title,
    };

    try {
      const response = await fetch(baseUrl + '/links', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Failed to add video');

      toast({
        title: "Success!",
        description: "Video has been added successfully.",
      });

      setState(initialState);
    } catch (err) {
      setState(prev => ({
        ...prev,
        error: 'Failed to add video. Please try again.',
      }));
      console.error('Error adding video:', err);
    } finally {
      setState(prev => ({ ...prev, loading: false }));
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <YouTubeLinkForm
          link={state.link}
          title={state.title}
          onLinkChange={handleLinkChange}
          onLinkBlur={handleLinkBlur}
          onUserChange={handleUserChange}
          onSubmit={handleSubmit}
          users={users}
          loading={state.loading}
          error={state.error}
        />
      </div>
    </div>
  );
};

export default AddLinks;