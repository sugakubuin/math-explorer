export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
    return (
        <div className={`flex items-center justify-center font-serif text-primary dark:text-blue-100 ${className}`}>
            <span style={{ fontSize: '1.2em', lineHeight: 1 }}>𝔐</span>
        </div>
    );
}
