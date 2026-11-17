'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeader from '@/components/SectionHeader';
import { servicesContent } from '@/data/content';

export default function ServicesPage() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [expandedFaq, setExpandedFaq] = useState(0);

  const handleAccordionChange = (panelIndex) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panelIndex : false);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Header */}
        <SectionHeader
          badge="Capabilities"
          title={servicesContent.header.title}
          subtitle={servicesContent.header.subtitle}
        />

        {/* Services Grid */}
        <Grid container spacing={4} sx={{ mb: 12 }}>
          {servicesContent.servicesList.map((service, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={idx}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  p: { xs: 2, sm: 3 },
                  border: service.highlight ? '2px solid' : undefined,
                  borderColor: service.highlight ? 'primary.main' : undefined,
                  position: 'relative',
                }}
              >
                {service.highlight && (
                  <Chip
                    label="Most Popular"
                    color="primary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      fontWeight: 700,
                    }}
                  />
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 1.5, pr: service.highlight ? 12 : 0 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                    {service.description}
                  </Typography>

                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                    Key Deliverables:
                  </Typography>
                  <List dense disablePadding>
                    {service.features.map((item, itemIdx) => (
                      <ListItem key={itemIdx} disableGutters sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
                          <CheckCircleIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant={service.highlight ? 'contained' : 'outlined'}
                    color="primary"
                    component={Link}
                    href="/contact"
                    fullWidth
                    endIcon={<ArrowForwardIcon />}
                  >
                    Inquire About This Service
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* FAQs */}
        <Box sx={{ maxWidth: 840, mx: 'auto' }}>
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Everything You Need to Know"
            subtitle="Common questions about our architecture, customizations, and working together."
          />

          <Box sx={{ mt: 4 }}>
            {servicesContent.faqs.map((faq, idx) => (
              <Accordion
                key={idx}
                expanded={expandedFaq === idx}
                onChange={handleAccordionChange(idx)}
                sx={{
                  mb: 1.5,
                  borderRadius: '10px !important',
                  '&:before': { display: 'none' },
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: 'none',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    fontWeight: 600,
                    px: 3,
                    py: 1,
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
