import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEOHead({ title, description, keywords })
{
    const location = useLocation();

    useEffect(() =>
    {
        const siteTitle = 'CertifyPro';
        const pageTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | IELTS & PTE Certificate Services`;
        const pageDescription = description || 'Trusted IELTS and PTE certificate services, score upgrade support, and PTE question solutions for students worldwide.';
        const pageKeywords = keywords || 'IELTS certificate, PTE certificate, buy IELTS certificate, buy PTE questions and answers, upgrade PTE score, upgrade IELTS score';
        const canonicalUrl = `${window.location.origin}${location.pathname}`;

        document.title = pageTitle;

        const setMeta = (name, content, property = false) =>
        {
            const attribute = property ? 'property' : 'name';
            let tag = document.querySelector(`meta[${attribute}="${name}"]`);
            if (!tag)
            {
                tag = document.createElement('meta');
                tag.setAttribute(attribute, name);
                document.head.appendChild(tag);
            }
            tag.setAttribute('content', content);
        };

        const setLink = (rel, href) =>
        {
            let tag = document.querySelector(`link[rel="${rel}"]`);
            if (!tag)
            {
                tag = document.createElement('link');
                tag.setAttribute('rel', rel);
                document.head.appendChild(tag);
            }
            tag.setAttribute('href', href);
        };

        setMeta('description', pageDescription);
        setMeta('keywords', pageKeywords);
        setMeta('robots', 'index, follow');
        setMeta('author', 'CertifyPro');
        setMeta('og:title', pageTitle, true);
        setMeta('og:description', pageDescription, true);
        setMeta('og:type', 'website', true);
        setMeta('og:url', canonicalUrl, true);
        setMeta('twitter:card', 'summary_large_image', true);
        setMeta('twitter:title', pageTitle, true);
        setMeta('twitter:description', pageDescription, true);

        setLink('canonical', canonicalUrl);

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [description, keywords, location.pathname, title]);

    return null;
}
