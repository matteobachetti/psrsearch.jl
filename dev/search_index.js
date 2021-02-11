var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = psrsearch","category":"page"},{"location":"#psrsearch","page":"Home","title":"psrsearch","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"psrsearch is a set of tools for (X-ray) pulsar searches.","category":"page"},{"location":"","page":"Home","title":"Home","text":"VERY EARLY DRAFT. Mostly for educational purposes","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [psrsearch]","category":"page"},{"location":"#psrsearch.chi2_logp-Tuple{Any,Any}","page":"Home","title":"psrsearch.chi2_logp","text":"Log survival function of the chi-squared distribution.\n\nExamples\n\njulia> using psrsearch;\n\njulia> using Distributions;\n\njulia> chi2 = 31;\n\njulia> d = Chisq(2);\n\njulia> isapprox(chi2_logp(chi2, 2), logccdf(d, chi2), atol=0.1)\ntrue\n\njulia> chi2 = Array([5, 32]);\n\njulia> all(isapprox.(chi2_logp.(chi2, 2), logccdf.(d, chi2), atol=0.1))\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#psrsearch.equivalent_gaussian_Nsigma-Tuple{Any}","page":"Home","title":"psrsearch.equivalent_gaussian_Nsigma","text":"Number of Gaussian sigmas corresponding to tail probability.\n\nThis function computes the value of the characteristic function of a standard Gaussian distribution for the tail probability equivalent to the provided p-value, and turns this value into units of standard deviations away from the Gaussian mean. This allows the user to make a statement about the signal such as “I detected this pulsation at 4.1 sigma\n\n\n\n\n\n","category":"method"},{"location":"#psrsearch.equivalent_gaussian_Nsigma_from_logp-Tuple{Any}","page":"Home","title":"psrsearch.equivalent_gaussian_Nsigma_from_logp","text":"Number of Gaussian sigmas corresponding to tail log-probability.\n\nThis function computes the value of the characteristic function of a standard Gaussian distribution for the tail probability equivalent to the provided p-value, and turns this value into units of standard deviations away from the Gaussian mean. This allows the user to make a statement about the signal such as “I detected this pulsation at 4.1 sigma\n\nThe example values below are obtained by brute-force integrating the Gaussian probability density function using the mpmath library between Nsigma and +inf.\n\nExamples\n\njulia> using psrsearch\n\njulia> pvalues = Array([0.15865525393145707, 0.0013498980316301035, 9.865877e-10, 6.22096e-16, 3.0567e-138]);\n\njulia> log_pvalues = log.(pvalues);\n\njulia> sigmas = Array([1, 3, 6, 8, 25]);\n\njulia> all(isapprox(equivalent_gaussian_Nsigma_from_logp.(log_pvalues), sigmas; atol=0.1))\ntrue\n\n\n\n\n\n","category":"method"},{"location":"#psrsearch.extended_equiv_gaussian_Nsigma-Tuple{Number}","page":"Home","title":"psrsearch.extended_equiv_gaussian_Nsigma","text":"Equivalent gaussian sigma for small log-probability.\n\nReturn the equivalent gaussian sigma corresponding to the natural log of the cumulative gaussian probability logp. In other words, return x, such that Q(x) = p, where Q(x) is the cumulative normal distribution. This version uses the rational approximation from Abramowitz and Stegun, eqn 26.2.23, that claims to be precise to ~1e-4. Using the log(P) as input gives a much extended range.\n\nThe parameters here are the result of a best-fit, with no physical meaning.\n\nTranslated from Scott Ransom's PRESTO\n\n\n\n\n\n","category":"method"},{"location":"#psrsearch.log_asymptotic_gamma-Tuple{Any}","page":"Home","title":"psrsearch.log_asymptotic_gamma","text":"Natural log of the Gamma function in its asymptotic limit.\n\nReturn the natural log of the gamma function in its asymptotic limit as z->infty.  This is from Abramowitz and Stegun eqn 6.1.41.\n\nTranslated from Scott Ransom's PRESTO\n\n\n\n\n\n","category":"method"},{"location":"#psrsearch.log_asymptotic_incomplete_gamma-Tuple{Any,Any}","page":"Home","title":"psrsearch.log_asymptotic_incomplete_gamma","text":"Asymptotic natural log of incomplete gamma function.\n\nReturn the natural log of the incomplete gamma function in its asymptotic limit as z->infty.  This is from Abramowitz and Stegun eqn 6.5.32.\n\nTranslated from Scott Ransom's PRESTO\n\nExamples\n\njulia> using psrsearch\n\njulia> pvalues = Array([0.15865525393145707, 0.0013498980316301035]);\n\njulia> sigmas = Array([1, 3]);\n\njulia> all(isapprox(equivalent_gaussian_Nsigma.(pvalues), sigmas; atol=0.1))\ntrue\n\n\n\n\n\n\n","category":"method"},{"location":"#psrsearch.logp_multitrial_from_single_logp-Tuple{Any,Any}","page":"Home","title":"psrsearch.logp_multitrial_from_single_logp","text":"Calculate a multi-trial p-value from the log of a single-trial one.\n\nThis allows to work around Numba's limitation on longdoubles, a way to vectorize the computation when we need longdouble precision.\n\nParameters\n\nlogp1 : float     The natural logarithm of the significance at which we reject the null     hypothesis on each single trial. n : int     The number of trials\n\nReturns\n\nlogpn : float     The log of the significance at which we reject the null hypothesis     after multiple trials\n\n\n\n\n\n","category":"method"},{"location":"#psrsearch.logp_single_trial_from_logp_multitrial-Tuple{Any,Any}","page":"Home","title":"psrsearch.logp_single_trial_from_logp_multitrial","text":"Calculate a multi-trial p-value from the log of a single-trial one.\n\nThis allows to work around Numba's limitation on longdoubles, a way to vectorize the computation when we need longdouble precision.\n\nParameters\n\nlogpn : float     The natural logarithm of the significance at which we want to reject     the null hypothesis after multiple trials n : int     The number of trials\n\nReturns\n\nlogp1 : float     The log of the significance at which we reject the null hypothesis on     each single trial.\n\n\n\n\n\n","category":"method"},{"location":"#psrsearch.z2_n_detection_level","page":"Home","title":"psrsearch.z2_n_detection_level","text":"Return the detection level for the Z^2_n statistics.\n\nSee Buccheri et al. (1983), Bendat and Piersol (1971).\n\nParameters\n\nn : int, default 2     The n in Z^2_n (number of harmonics, including the fundamental) epsilon : float, default 0.01     The fractional probability that the signal has been produced by noise\n\nOther Parameters\n\nntrial : int     The number of trials executed to find this profile nsummedspectra : int     Number of Z_2^n periodograms that are being averaged\n\nReturns\n\ndetlev : float     The epoch folding statistics corresponding to a probability     epsilon * 100 % that the signal has been produced by noise\n\n\n\n\n\n","category":"function"},{"location":"#psrsearch.z2_n_logprobability-Tuple{Any,Any}","page":"Home","title":"psrsearch.z2_n_logprobability","text":"Calculate the probability of a certain folded profile, due to noise.\n\nParameters\n\nz2 : float     A Z^2_n statistics value n : int, default 2     The n in Z^2_n (number of harmonics, including the fundamental)\n\nOther Parameters\n\nntrial : int     The number of trials executed to find this profile nsummedspectra : int     Number of Z_2^n periodograms that were averaged to obtain z2\n\nReturns\n\np : float     The probability that the Z^2_n value has been produced by noise\n\n\n\n\n\n","category":"method"},{"location":"#psrsearch.z2_n_probability-Tuple{Any,Any}","page":"Home","title":"psrsearch.z2_n_probability","text":"Calculate the probability of a certain folded profile, due to noise.\n\nParameters\n\nz2 : float     A Z^2_n statistics value n : int, default 2     The n in Z^2_n (number of harmonics, including the fundamental)\n\nOther Parameters\n\nntrial : int     The number of trials executed to find this profile nsummedspectra : int     Number of Z_2^n periodograms that were averaged to obtain z2\n\nReturns\n\np : float     The probability that the Z^2_n value has been produced by noise\n\n\n\n\n\n","category":"method"},{"location":"#psrsearch.z_n-Union{Tuple{T}, Tuple{Array{T,1},Integer}} where T<:AbstractFloat","page":"Home","title":"psrsearch.z_n","text":"z_n(phases, n) --> zsq\n\nZ^2_n statistics, à la Buccheri+83, A&A, 128, 245, eq. 2.\n\nParameters\n\nphase : array of floats     The phases of the events\n\nn : int, default 2     Number of harmonics, including the fundamental\n\nReturns\n\nzsq : float     The Z^2_n statistic\n\nExamples\n\njulia> using psrsearch\n\njulia> z_n([10., 0., 0., 0., 0.], 2)\n20.0\njulia> z_n(ones(10), 2)\n40.0\njulia> z_n(Array([0.5]), 2)\n0.0\n\n\n\n\n\n","category":"method"},{"location":"#psrsearch.z_n_binned-Union{Tuple{T}, Tuple{Array{T,1},Integer}} where T<:AbstractFloat","page":"Home","title":"psrsearch.z_n_binned","text":"z_n_binned(profile, n) --> zsq\n\nZ^2_n statistic for pulse profiles from binned events\n\nSee Bachetti+2021, arXiv:2012.11397\n\nParameters\n\nprofile : array of floats     The folded pulse profile (containing the number of     photons falling in each pulse bin)\n\nn : int     Number of harmonics, including the fundamental\n\nReturns\n\nzsq : float     The value of the statistic\n\nExamples\n\njulia> using psrsearch\n\njulia> z_n_binned(zeros(10), 2)\n0.0\n\njulia> z_n_binned(ones(10), 2) < 1e-30\ntrue\n\njulia> z_n_binned([10., 0., 0., 0., 0.], 2)\n40.0\n\n\n\n\n\n","category":"method"},{"location":"#psrsearch.z_n_search-Union{Tuple{T}, Tuple{Array{T,1},Integer,Number,Number}} where T<:AbstractFloat","page":"Home","title":"psrsearch.z_n_search","text":"z_n_search(times, n, fmin, fmax [,oversample]) --> freqs, zsq_stat\n\nCalculate the Z^2_n statistics at trial frequencies in photon data.\n\nParameters\n\ntimes : array-like     the event arrival times\n\nn : int     the number of harmonics in Z^2_n\n\nOther Parameters\n\nfmin : float     minimum pulse frequency to search\n\nfmax : float     maximum pulse frequency to search\n\noversample : float     Oversampling factor with respect to the usual 1/T/n rule\n\nReturns\n\nfgrid : array-like     frequency grid of the epoch folding periodogram\n\nzsq_stat : array-like     the Z^2_n statistics corresponding to each frequency bin.\n\n\n\n\n\n","category":"method"}]
}