'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SectionHeader from '@/components/SectionHeader';
import { portfolioContent } from '@/data/content';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? portfolioContent.projects
    : portfolioContent.projects.filter((p) => p.category === selectedCategory);

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <SectionHeader
          badge="Featured Work"
          title={portfolioContent.header.title}
          subtitle={portfolioContent.header.subtitle}
        />

        {/* Category Filters */}
        <Stack
          direction="row"
          spacing={1}
          justifyContent="center"
          flexWrap="wrap"
          useFlexGap
          sx={{ mb: 6 }}
        >
          {portfolioContent.categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <Chip
                key={cat}
                label={cat}
                clickable
                color={isSelected ? 'primary' : 'default'}
                variant={isSelected ? 'filled' : 'outlined'}
                onClick={() => setSelectedCategory(cat)}
                sx={{
                  px: 1.5,
                  py: 2,
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: '0.875rem',
                }}
              />
            );
          })}
        </Stack>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid size={{ xs: 12, sm: 6, md: 6 }} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
                    <Chip
                      label={project.category}
                      size="small"
                      color="secondary"
                      variant="outlined"
                    />
                  </Box>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1.5 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.7 }}>
                    {project.summary}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                    {project.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        sx={{ fontSize: '0.75rem', backgroundColor: 'action.hover' }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant="text"
                    color="primary"
                    endIcon={<OpenInNewIcon fontSize="small" />}
                    onClick={() => setActiveProject(project)}
                    sx={{ fontWeight: 600, px: 0 }}
                  >
                    View Project Case Study
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Project Detail Modal */}
        <Dialog
          open={Boolean(activeProject)}
          onClose={() => setActiveProject(null)}
          maxWidth="md"
          fullWidth
          PaperProps={{ sx: { borderRadius: 3, p: 1 } }}
        >
          {activeProject && (
            <>
              <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box>
                  <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
                    {activeProject.category}
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>
                    {activeProject.title}
                  </Typography>
                </Box>
                <IconButton onClick={() => setActiveProject(null)} aria-label="close modal">
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent dividers>
                <CardMedia
                  component="img"
                  height="300"
                  image={activeProject.image}
                  alt={activeProject.title}
                  sx={{ borderRadius: 2, mb: 3, objectFit: 'cover' }}
                />
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
                  {activeProject.summary}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 3 }}>
                  This project demonstrates how scalable components, accessibility standards, and clean state management combine to produce measurable business performance. You can update this project details block with custom metrics, technical architecture overviews, and live preview links anytime in <code>src/data/content.js</code>.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {activeProject.tags.map((tag) => (
                    <Chip key={tag} label={tag} color="primary" variant="outlined" size="small" />
                  ))}
                </Box>
              </DialogContent>
              <DialogActions sx={{ p: 2 }}>
                <Button onClick={() => setActiveProject(null)} variant="outlined">
                  Close
                </Button>
              </DialogActions>
            </>
          )}
        </Dialog>
      </Container>
    </Box>
  );
}
