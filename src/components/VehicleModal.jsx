'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Dialog,
  DialogContent,
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { MARUTI_MODELS, getCarOnRoadPrice } from '@/config/brochures';

const ACCENT_RED = '#e7210b';
const ACCENT_RED_HOVER = '#cf1904';
const TEXT_DARK = '#111827';
const TEXT_MUTED = '#6b7280';
const BORDER_COLOR = '#e5e7eb';

const tenureOptions = [
  { label: '12 months', value: 12 },
  { label: '24 months', value: 24 },
  { label: '36 months', value: 36 },
  { label: '48 months', value: 48 },
  { label: '60 months', value: 60 },
  { label: '72 months', value: 72 },
  { label: '84 months', value: 84 },
];

export default function VehicleModal({
  open,
  onClose,
  action, // 'Test Drive' | 'Book Test Drive' | 'Get Price' | 'EMI Calculator'
  vehicleName = 'Maruti Suzuki Brezza',
  onSuccess,
}) {
  // Normalize action name
  const isTestDrive = action === 'Test Drive' || action === 'Book Test Drive';
  const isGetPrice = action === 'Get Price' || action === 'Get On-Road Price';
  const isEmi = action === 'EMI Calculator';

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [pincode, setPincode] = useState('');
  const [selectedModel, setSelectedModel] = useState(vehicleName);
  const [minDate, setMinDate] = useState('');

  // EMI State
  const [priceNum, setPriceNum] = useState(1069500);
  const [downPayment, setDownPayment] = useState(213900);
  const [tenure, setTenure] = useState(60);
  const [interestRate, setInterestRate] = useState(8.5);

  useEffect(() => {
    setMinDate(new Date().toISOString().split('T')[0]);
  }, []);

  // Update selected vehicle and EMI defaults when prop changes
  useEffect(() => {
    if (vehicleName) {
      setSelectedModel(vehicleName);
      const base = getCarOnRoadPrice(vehicleName);
      setPriceNum(base);
      setDownPayment(Math.round(base * 0.2));
    }
  }, [vehicleName, open]);

  // Handle Model Change in dropdown
  const handleModelChange = (e) => {
    const val = e.target.value;
    setSelectedModel(val);
    const base = getCarOnRoadPrice(val);
    setPriceNum(base);
    setDownPayment(Math.round(base * 0.2));
  };

  // Accurate EMI Calculation matching screenshot
  const calculatedEmi = useMemo(() => {
    const principal = Math.max(0, priceNum - (Number(downPayment) || 0));
    if (principal <= 0) return 0;
    const monthlyRate = (Number(interestRate) || 8.5) / 100 / 12;
    if (monthlyRate === 0) return Math.round(principal / tenure);
    const n = Number(tenure) || 60;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
      (Math.pow(1 + monthlyRate, n) - 1);
    return Math.round(emi);
  }, [priceNum, downPayment, tenure, interestRate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSuccess) {
      onSuccess({
        action,
        fullName,
        phone,
        date,
        pincode,
        model: selectedModel,
      });
    }
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="xs"
      fullWidth
      slotProps={{
        paper: {
          sx: {
            borderRadius: '16px',
            p: { xs: 2.5, sm: 3 },
            maxWidth: '440px',
            width: '100%',
            m: 2,
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
          },
        },
      }}
    >
      {/* Top Close Button */}
      <IconButton
        onClick={onClose}
        size="small"
        aria-label="close"
        sx={{
          position: 'absolute',
          top: 14,
          right: 14,
          color: '#6b7280',
          '&:hover': { color: TEXT_DARK },
        }}
      >
        <CloseIcon sx={{ fontSize: 18 }} />
      </IconButton>

      {/* 1. Book Test Drive Modal (Matching Screenshot 1) */}
      {isTestDrive && (
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Typography
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: '1.4rem',
              color: TEXT_DARK,
              lineHeight: 1.2,
            }}
          >
            Book Test Drive
          </Typography>
          <Typography sx={{ fontSize: '13.5px', color: TEXT_MUTED, mt: 0.6, mb: 2.8 }}>
            Schedule a test drive at your nearest Bimal showroom.
          </Typography>

          {/* Full Name */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '13.5px', fontWeight: 600, color: TEXT_DARK, mb: 0.6 }}>
              Full Name
            </Typography>
            <TextField
              required
              fullWidth
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              size="medium"
              autoFocus
              slotProps={{
                htmlInput: {
                  sx: { fontSize: '14px', py: 1.3, px: 1.8 },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  '& fieldset': { borderColor: BORDER_COLOR },
                  '&:hover fieldset': { borderColor: '#cbd5e1' },
                  '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                },
              }}
            />
          </Box>

          {/* Phone Number */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '13.5px', fontWeight: 600, color: TEXT_DARK, mb: 0.6 }}>
              Phone Number
            </Typography>
            <TextField
              required
              fullWidth
              type="tel"
              placeholder="10-digit mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              size="medium"
              slotProps={{
                htmlInput: {
                  maxLength: 10,
                  sx: { fontSize: '14px', py: 1.3, px: 1.8 },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  '& fieldset': { borderColor: BORDER_COLOR },
                  '&:hover fieldset': { borderColor: '#cbd5e1' },
                  '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                },
              }}
            />
          </Box>

          {/* Preferred Date */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '13.5px', fontWeight: 600, color: TEXT_DARK, mb: 0.6 }}>
              Preferred Date
            </Typography>
            <TextField
              required
              fullWidth
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              size="medium"
              slotProps={{
                htmlInput: {
                  min: minDate,
                  sx: {
                    fontSize: '14px',
                    py: 1.3,
                    px: 1.8,
                    color: date ? TEXT_DARK : '#9ca3af',
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  '& fieldset': { borderColor: BORDER_COLOR },
                  '&:hover fieldset': { borderColor: '#cbd5e1' },
                  '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                },
              }}
            />
          </Box>

          {/* Select Model */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: '13.5px', fontWeight: 600, color: TEXT_DARK, mb: 0.6 }}>
              Select Model
            </Typography>
            <TextField
              select
              fullWidth
              value={selectedModel || ''}
              onChange={handleModelChange}
              size="medium"
              slotProps={{
                select: {
                  displayEmpty: true,
                  sx: { fontSize: '14px', py: 1.3, px: 1.8 },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  '& fieldset': { borderColor: BORDER_COLOR },
                  '&:hover fieldset': { borderColor: '#cbd5e1' },
                  '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                },
              }}
            >
              <MenuItem value="" disabled>
                Choose model
              </MenuItem>
              {MARUTI_MODELS.map((m) => (
                <MenuItem key={m} value={m}>
                  {m}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          {/* Actions */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5, mt: 3.5 }}>
            <Button
              type="button"
              onClick={onClose}
              sx={{
                color: TEXT_DARK,
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                px: 2.8,
                py: 1.1,
                fontSize: '13.5px',
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#f9fafb',
                  borderColor: '#d1d5db',
                },
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: ACCENT_RED,
                color: '#ffffff',
                borderRadius: '8px',
                px: 3,
                py: 1.1,
                fontSize: '13.5px',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: ACCENT_RED_HOVER,
                  boxShadow: 'none',
                },
              }}
            >
              Submit Request
            </Button>
          </Box>
        </Box>
      )}

      {/* 2. Get Price Modal (Matching Screenshot 2) */}
      {isGetPrice && (
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Typography
            sx={{
              fontFamily: "'Rajdhani', sans-serif",
              fontWeight: 700,
              fontSize: '1.4rem',
              color: TEXT_DARK,
              lineHeight: 1.2,
            }}
          >
            Get Price
          </Typography>
          <Typography sx={{ fontSize: '13.5px', color: TEXT_MUTED, mt: 0.6, mb: 2.8 }}>
            Get the best on-road price for your city.
          </Typography>

          {/* Full Name */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '13.5px', fontWeight: 600, color: TEXT_DARK, mb: 0.6 }}>
              Full Name
            </Typography>
            <TextField
              required
              fullWidth
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              size="medium"
              autoFocus
              slotProps={{
                htmlInput: {
                  sx: { fontSize: '14px', py: 1.3, px: 1.8 },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  '& fieldset': { borderColor: BORDER_COLOR },
                  '&:hover fieldset': { borderColor: '#cbd5e1' },
                  '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                },
              }}
            />
          </Box>

          {/* Phone Number */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '13.5px', fontWeight: 600, color: TEXT_DARK, mb: 0.6 }}>
              Phone Number
            </Typography>
            <TextField
              required
              fullWidth
              type="tel"
              placeholder="10-digit mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              size="medium"
              slotProps={{
                htmlInput: {
                  maxLength: 10,
                  sx: { fontSize: '14px', py: 1.3, px: 1.8 },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  '& fieldset': { borderColor: BORDER_COLOR },
                  '&:hover fieldset': { borderColor: '#cbd5e1' },
                  '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                },
              }}
            />
          </Box>

          {/* Pincode */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '13.5px', fontWeight: 600, color: TEXT_DARK, mb: 0.6 }}>
              Pincode
            </Typography>
            <TextField
              required
              fullWidth
              placeholder="Your area pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              size="medium"
              slotProps={{
                htmlInput: {
                  maxLength: 6,
                  sx: { fontSize: '14px', py: 1.3, px: 1.8 },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  '& fieldset': { borderColor: BORDER_COLOR },
                  '&:hover fieldset': { borderColor: '#cbd5e1' },
                  '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                },
              }}
            />
          </Box>

          {/* Select Model */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{ fontSize: '13.5px', fontWeight: 600, color: TEXT_DARK, mb: 0.6 }}>
              Select Model
            </Typography>
            <TextField
              select
              fullWidth
              value={selectedModel || ''}
              onChange={handleModelChange}
              size="medium"
              slotProps={{
                select: {
                  displayEmpty: true,
                  sx: { fontSize: '14px', py: 1.3, px: 1.8 },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  '& fieldset': { borderColor: BORDER_COLOR },
                  '&:hover fieldset': { borderColor: '#cbd5e1' },
                  '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                },
              }}
            >
              <MenuItem value="" disabled>
                Choose model
              </MenuItem>
              {MARUTI_MODELS.map((m) => (
                <MenuItem key={m} value={m}>
                  {m}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          {/* Actions */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5, mt: 3.5 }}>
            <Button
              type="button"
              onClick={onClose}
              sx={{
                color: TEXT_DARK,
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                px: 2.8,
                py: 1.1,
                fontSize: '13.5px',
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#f9fafb',
                  borderColor: '#d1d5db',
                },
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: ACCENT_RED,
                color: '#ffffff',
                borderRadius: '8px',
                px: 3.2,
                py: 1.1,
                fontSize: '13.5px',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: ACCENT_RED_HOVER,
                  boxShadow: 'none',
                },
              }}
            >
              Get Price
            </Button>
          </Box>
        </Box>
      )}

      {/* 3. EMI Calculator Modal (Matching Screenshot 3) */}
      {isEmi && (
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pr: 3 }}>
            <Typography component="span" sx={{ fontSize: '1.25rem', lineHeight: 1 }}>
              🧮
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                fontSize: '1.35rem',
                color: TEXT_DARK,
                lineHeight: 1.2,
              }}
            >
              EMI Calculator – {selectedModel}
            </Typography>
          </Box>
          <Typography sx={{ fontSize: '13.5px', color: TEXT_MUTED, mt: 0.6, mb: 2.5 }}>
            Calculate your monthly EMI instantly.
          </Typography>

          {/* Car Price (On-Road) */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '13.5px', fontWeight: 600, color: TEXT_DARK, mb: 0.6 }}>
              Car Price (On-Road)
            </Typography>
            <TextField
              fullWidth
              value={`₹${priceNum.toLocaleString('en-IN')}`}
              disabled
              size="medium"
              slotProps={{
                htmlInput: {
                  sx: {
                    fontSize: '14px',
                    py: 1.3,
                    px: 1.8,
                    fontWeight: 600,
                    color: TEXT_DARK,
                    WebkitTextFillColor: TEXT_DARK,
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#f3f4f6',
                  '& fieldset': { borderColor: BORDER_COLOR },
                },
              }}
            />
          </Box>

          {/* Down Payment (₹) */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '13.5px', fontWeight: 600, color: TEXT_DARK, mb: 0.6 }}>
              Down Payment (₹)
            </Typography>
            <TextField
              fullWidth
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Math.max(0, Number(e.target.value)))}
              size="medium"
              slotProps={{
                htmlInput: {
                  sx: { fontSize: '14px', py: 1.3, px: 1.8 },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  '& fieldset': { borderColor: BORDER_COLOR },
                  '&:hover fieldset': { borderColor: '#cbd5e1' },
                  '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                },
              }}
            />
          </Box>

          {/* Loan Tenure (Months) */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '13.5px', fontWeight: 600, color: TEXT_DARK, mb: 0.6 }}>
              Loan Tenure (Months)
            </Typography>
            <TextField
              select
              fullWidth
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              size="medium"
              slotProps={{
                select: {
                  sx: { fontSize: '14px', py: 1.3, px: 1.8 },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  '& fieldset': { borderColor: BORDER_COLOR },
                  '&:hover fieldset': { borderColor: '#cbd5e1' },
                  '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                },
              }}
            >
              {tenureOptions.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  {opt.label}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          {/* Interest Rate (% per year) */}
          <Box sx={{ mb: 2.5 }}>
            <Typography sx={{ fontSize: '13.5px', fontWeight: 600, color: TEXT_DARK, mb: 0.6 }}>
              Interest Rate (% per year)
            </Typography>
            <TextField
              fullWidth
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              size="medium"
              slotProps={{
                htmlInput: {
                  step: 0.1,
                  sx: { fontSize: '14px', py: 1.3, px: 1.8 },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '8px',
                  backgroundColor: '#ffffff',
                  '& fieldset': { borderColor: BORDER_COLOR },
                  '&:hover fieldset': { borderColor: '#cbd5e1' },
                  '&.Mui-focused fieldset': { borderColor: ACCENT_RED },
                },
              }}
            />
          </Box>

          {/* Pink Calculation Box */}
          <Box
            sx={{
              backgroundColor: '#fef2f2',
              border: '1px solid #fee2e2',
              borderRadius: '8px',
              py: 2.2,
              px: 2,
              textAlign: 'center',
              mb: 3,
            }}
          >
            <Typography sx={{ fontSize: '13px', color: '#6b7280', mb: 0.4 }}>
              Estimated Monthly EMI
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 800,
                fontSize: '1.75rem',
                color: ACCENT_RED,
                lineHeight: 1.1,
              }}
            >
              ₹{calculatedEmi.toLocaleString('en-IN')}
            </Typography>
          </Box>

          {/* Close Button */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              onClick={onClose}
              sx={{
                color: TEXT_DARK,
                backgroundColor: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                px: 3.5,
                py: 1,
                fontSize: '13.5px',
                fontWeight: 500,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#f9fafb',
                  borderColor: '#d1d5db',
                },
              }}
            >
              Close
            </Button>
          </Box>
        </Box>
      )}
    </Dialog>
  );
}

