import neurokit2 as nk

sig = nk.ecg_simulate(duration = 30, sampling_rate=250)

_, info = nk.ecg_peaks(sig,sampling_rate=250)
hrv = nk.hrv_time(info, sampling_rate=250)
hrv.head()